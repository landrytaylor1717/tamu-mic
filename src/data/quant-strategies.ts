export interface QuantStrategy {
  id: string;
  name: string;
  description: string;
  metrics: {
    sharpe: string;
    sortino: string;
    maxDrawdown: string;
    annualReturn: string;
  };
}

export const quantStrategies: QuantStrategy[] = [
  {
    id: "mean-reversion",
    name: "Statistical Mean Reversion",
    description:
      "Identifies securities that have deviated significantly from their historical mean using z-score analysis and Bollinger Band signals. The strategy employs pairs trading across correlated assets to capture convergence alpha while maintaining market neutrality.",
    metrics: {
      sharpe: "1.87",
      sortino: "2.41",
      maxDrawdown: "-6.2%",
      annualReturn: "+18.3%",
    },
  },
  {
    id: "momentum",
    name: "Cross-Sectional Momentum",
    description:
      "Ranks securities by trailing 12-month returns (excluding the most recent month) and constructs long-short portfolios. Enhanced with volume-weighted momentum signals and volatility-adjusted position sizing.",
    metrics: {
      sharpe: "1.54",
      sortino: "1.98",
      maxDrawdown: "-11.4%",
      annualReturn: "+22.1%",
    },
  },
  {
    id: "factor-model",
    name: "Multi-Factor Alpha Model",
    description:
      "Combines value, quality, momentum, and low-volatility factors using machine learning to dynamically weight factor exposures. The model is retrained monthly on rolling 3-year windows to adapt to regime changes.",
    metrics: {
      sharpe: "2.12",
      sortino: "2.87",
      maxDrawdown: "-4.8%",
      annualReturn: "+15.6%",
    },
  },
];

export const pythonSnippets = [
  {
    title: "mean_reversion.py",
    code: `import numpy as np
import pandas as pd
from scipy import stats

class MeanReversionStrategy:
    """Statistical mean reversion using z-score signals."""

    def __init__(self, lookback: int = 60, entry_z: float = 2.0):
        self.lookback = lookback
        self.entry_z = entry_z
        self.exit_z = 0.5

    def compute_signals(self, prices: pd.Series) -> pd.Series:
        rolling_mean = prices.rolling(self.lookback).mean()
        rolling_std = prices.rolling(self.lookback).std()

        z_scores = (prices - rolling_mean) / rolling_std

        signals = pd.Series(0, index=prices.index)
        signals[z_scores < -self.entry_z] = 1   # Long
        signals[z_scores > self.entry_z] = -1    # Short

        return signals

    def backtest(self, prices: pd.Series) -> dict:
        signals = self.compute_signals(prices)
        returns = prices.pct_change() * signals.shift(1)
        sharpe = np.sqrt(252) * returns.mean() / returns.std()
        return {"sharpe_ratio": round(sharpe, 2)}`,
  },
  {
    title: "factor_model.py",
    code: `import pandas as pd
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.preprocessing import StandardScaler

class MultiFactorModel:
    """Dynamic multi-factor alpha model with ML weighting."""

    FACTORS = ["value", "momentum", "quality", "low_vol"]

    def __init__(self, train_window: int = 756):
        self.train_window = train_window
        self.model = GradientBoostingRegressor(
            n_estimators=200,
            max_depth=4,
            learning_rate=0.05,
        )
        self.scaler = StandardScaler()

    def fit(self, factor_data: pd.DataFrame,
            forward_returns: pd.Series):
        X = self.scaler.fit_transform(
            factor_data[self.FACTORS]
        )
        self.model.fit(X, forward_returns)

    def predict_alpha(self, factor_data: pd.DataFrame):
        X = self.scaler.transform(
            factor_data[self.FACTORS]
        )
        return pd.Series(
            self.model.predict(X),
            index=factor_data.index,
        )`,
  },
];

export const techStack = [
  { name: "Python", category: "Language" },
  { name: "R", category: "Language" },
  { name: "pandas", category: "Data" },
  { name: "NumPy", category: "Data" },
  { name: "scikit-learn", category: "ML" },
  { name: "Bloomberg Terminal", category: "Data" },
  { name: "QuantConnect", category: "Platform" },
  { name: "PostgreSQL", category: "Database" },
];
