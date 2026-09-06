// Data for the Learn More "book finder" — check a few areas you're curious
// about, pick a level, and get three real, specific recommendations per
// area instead of one long undifferentiated reading list. Every book below
// is real and in print (or was, for a couple of out-of-print classics still
// worth tracking down); levels run Beginner → Intermediate → Advanced, and
// no title repeats across areas even where a book could plausibly fit two.

export const LEVELS = ["Beginner", "Intermediate", "Advanced"];

export const areas = [
  {
    id: "hedge-funds",
    name: "Hedge Funds & Alternative Strategies",
    subtitle:
      "Long/short equity, global macro, event-driven investing, relative value arbitrage, and dynamic risk management.",
    levels: {
      Beginner: [
        {
          title: "More Money Than God",
          author: "Sebastian Mallaby",
          cover: "https://covers.openlibrary.org/b/id/7608213-M.jpg",
          tagline: "A narrative history of the hedge fund industry, from Alfred Winslow Jones to the 2008 crisis.",
          summary:
            "Mallaby traces the hedge fund industry from its quiet 1949 origins through the macro cowboys of the 1980s and 90s to the quants of the 2000s, using each era's dominant manager — Jones, Soros, Robertson, Simons — as a lens on how the strategy of the moment actually worked.",
          learn: [
            "Why hedge funds exist as a structure (fees, leverage, short-selling) and how that shapes their incentives",
            "How the major strategy families — global macro, long/short equity, quant — actually emerged historically",
            "What separates genuine skill from a levered bet on a trend, using real blowups as evidence either way",
          ],
          structure:
            "Organized roughly chronologically by decade and by manager, so it doubles as a strategy history — you can read the Soros-era chapters for macro or the Simons-era chapters for quant without needing the rest.",
        },
        {
          title: "The Alpha Masters",
          author: "Maneet Ahuja",
          cover: "https://covers.openlibrary.org/b/id/9013008-M.jpg",
          tagline: "Short profiles of well-known hedge fund managers, each centered on one signature trade.",
          summary:
            "Each chapter profiles one manager — John Paulson's subprime short, Dan Loeb's activist letters, Ray Dalio's risk-parity thinking — through the specific decision that made their reputation, rather than a full biography.",
          learn: [
            "How different managers frame the same market through completely different lenses",
            "What an activist letter, a macro bet, and a distressed-debt trade each actually look like in practice",
            "A map of 'who does what' across the industry before you go deeper into any one strategy",
          ],
          structure:
            "Self-contained chapters, one manager each — a good one to read out of order, picking the strategies you're most curious about first.",
        },
        {
          title: "Diary of a Very Bad Year",
          author: "Anonymous, interviewed by Keith Gessen",
          cover: "https://covers.openlibrary.org/b/id/8323695-M.jpg",
          tagline: "A running, anonymous conversation with a macro hedge fund manager through the 2008 crisis.",
          summary:
            "A series of interviews conducted in real time as the 2008 financial crisis unfolded, with an anonymous hedge fund manager explaining — in plain, unguarded language — what he was seeing, trading, and worried about week to week.",
          learn: [
            "What it actually feels like to hold risk through a systemic crisis, not just the after-the-fact narrative",
            "How a macro manager reads credit markets, the Fed, and counterparty risk in real time",
            "Why liquidity and financing risk can matter more than being directionally right",
          ],
          structure:
            "A chronological transcript-style conversation from spring 2008 through early 2009 — reads almost like a diary, hence the title.",
        },
      ],
      Intermediate: [
        {
          title: "Inside the House of Money",
          author: "Steven Drobny",
          cover: "https://covers.openlibrary.org/b/id/9042119-M.jpg",
          tagline: "Interviews with anonymous global macro hedge fund traders on how they actually build positions.",
          summary:
            "Drobny interviews a dozen-plus global macro traders — most anonymous, all successful across multiple cycles — about how they size positions, manage risk, and think about central banks, currencies, and rates.",
          learn: [
            "How a global macro trader actually constructs a thesis across currencies, rates, and commodities at once",
            "Position sizing and risk management from people who've survived several full cycles",
            "Why the best macro traders talk more about being wrong quickly than about being right",
          ],
          structure:
            "A series of standalone interviews grouped loosely by theme (currencies, emerging markets, risk management) — skip around to the traders whose style interests you most.",
        },
        {
          title: "The Most Important Thing",
          author: "Howard Marks",
          cover: "https://covers.openlibrary.org/b/id/10001222-M.jpg",
          tagline: "Oaktree's founder on risk, market cycles, and second-level thinking.",
          summary:
            "Built from Marks's client memos, the book argues that the single hardest and most valuable skill in investing is thinking one level deeper than consensus — about risk, cycles, and where you sit relative to the crowd — rather than simply having a good idea.",
          learn: [
            "The difference between first-level thinking ('this is a good company') and second-level thinking ('everyone already knows that')",
            "How to think about risk as something you manage continuously, not a number you calculate once",
            "Why market cycles are more reliably predictable than any individual security",
          ],
          structure:
            "Short, focused chapters — each built around one idea (risk, cycles, contrarianism, patience) — that can each be read in one sitting.",
        },
        {
          title: "Hedge Fund Market Wizards",
          author: "Jack D. Schwager",
          cover: "https://covers.openlibrary.org/b/id/10018478-M.jpg",
          tagline: "Interviews with hedge fund managers about the specific edge behind their returns.",
          summary:
            "The hedge-fund-specific entry in Schwager's long-running Market Wizards series, pressing each manager on exactly what gives them an edge and how they manage risk when that edge stops working.",
          learn: [
            "How a range of managers — quant, discretionary, macro, equity — each define and defend their 'edge'",
            "Concrete position-sizing and stop-loss discipline from people who've run real capital through drawdowns",
            "Why so many successful managers describe risk management, not stock-picking, as their real skill",
          ],
          structure:
            "Independent interviews organized by strategy type, with a closing summary chapter distilling common threads across all of them.",
        },
      ],
      Advanced: [
        {
          title: "When Genius Failed",
          author: "Roger Lowenstein",
          cover: "https://covers.openlibrary.org/b/id/885122-M.jpg",
          tagline: "The definitive account of Long-Term Capital Management's collapse.",
          summary:
            "A detailed reconstruction of how LTCM — staffed by Nobel laureates and run on rigorously modeled relative-value and arbitrage trades — nearly took down the financial system when its models met a market that stopped behaving like its history.",
          learn: [
            "How leverage turns a small modeling error into a systemic event",
            "Why relative-value and arbitrage strategies can look riskless right up until correlations break down together",
            "What LTCM's specific positions (Treasury spreads, merger arb, equity vol) actually were, and why they unwound at the same time",
          ],
          structure:
            "A chronological narrative from the fund's founding through its 1998 bailout, with enough technical detail on the actual trades to work as a case study, not just a story.",
        },
        {
          title: "Fooling Some of the People All of the Time",
          author: "David Einhorn",
          cover: "https://covers.openlibrary.org/b/id/10656766-M.jpg",
          tagline: "A short-seller's own detailed account of a six-year public fight over one company's numbers.",
          summary:
            "Einhorn's own record of Greenlight Capital's short thesis on Allied Capital, including the original research, the company's and regulators' responses, and the years-long public fight that followed — a rare first-person look at a short thesis defended in real time.",
          learn: [
            "How to build and stress-test a short thesis based on accounting red flags, not just valuation",
            "What it actually looks like when a company and its allies push back on public research",
            "Why conviction and being early are not the same thing — the payoff took years",
          ],
          structure:
            "Chronological, told through Einhorn's own research notes, public letters, and SEC correspondence — dense with primary-source detail rather than summary.",
        },
        {
          title: "The Alchemy of Finance",
          author: "George Soros",
          cover: "https://covers.openlibrary.org/b/id/4115861-M.jpg",
          tagline: "Soros's own theory of reflexivity, and a real-time trading diary applying it.",
          summary:
            "Soros lays out reflexivity — the idea that investor perception doesn't just reflect market fundamentals but actively changes them — as a general theory, then applies it in a real-time diary of his own macro trading over roughly a year.",
          learn: [
            "Reflexivity as a distinct framework from efficient-markets thinking, and where it changes how you'd trade",
            "How a top macro investor actually keeps a live trading diary and revises a thesis as new data arrives",
            "Why self-reinforcing trends (and their eventual reversals) are, in Soros's view, the market's normal state, not an anomaly",
          ],
          structure:
            "Part one is theoretical (reflexivity, boom-bust dynamics); part two is a real-time diary of live trades — the density and abstractness of part one is the main reason this sits at the advanced end.",
        },
      ],
    },
  },

  {
    id: "portfolio-construction",
    name: "Portfolio Construction & Asset Allocation",
    subtitle:
      "Modern Portfolio Theory (MPT), factor investing, risk parity, yield optimization, and multi-asset portfolio rebalancing.",
    levels: {
      Beginner: [
        {
          title: "A Random Walk Down Wall Street",
          author: "Burton Malkiel",
          cover: "https://covers.openlibrary.org/b/id/246978-M.jpg",
          tagline: "Efficient markets, diversification, and why most active bets don't pay for their own cost.",
          summary:
            "Malkiel's classic case for market efficiency and broad diversification, walking through why picking individual winners is harder than it looks and why costs quietly determine most investors' actual long-run returns.",
          learn: [
            "The efficient market hypothesis, in its strong, semi-strong, and weak forms, and the evidence for each",
            "Why fees and turnover matter more to most portfolios than manager skill",
            "A plain-language case for indexing that you'll need to understand even if you end up disagreeing with parts of it",
          ],
          structure:
            "Opens with a history of financial manias, works through the academic efficient-markets case, then closes with practical asset-allocation guidance by life stage.",
        },
        {
          title: "The Four Pillars of Investing",
          author: "William Bernstein",
          cover: "https://covers.openlibrary.org/b/id/57827-M.jpg",
          tagline: "Theory, history, psychology, and the investing business — how the four fit into one portfolio.",
          summary:
            "Bernstein argues that building a sound portfolio requires four kinds of literacy at once: the theory (risk and return), the history (bubbles and crashes), the psychology (your own worst instincts), and the business (how the industry makes money off you).",
          learn: [
            "The mathematical relationship between risk and expected return, explained without heavy formalism",
            "How to recognize a bubble in progress using historical pattern, not just hindsight",
            "Why the investment industry's incentives often run against the individual investor's, and how to plan around that",
          ],
          structure:
            "Four parts, one per 'pillar,' each building toward the same practical asset-allocation conclusion from a different angle.",
        },
        {
          title: "The Ivy Portfolio",
          author: "Mebane Faber & Eric Richardson",
          cover: "https://covers.openlibrary.org/b/id/9104885-M.jpg",
          tagline: "How endowments diversify across asset classes, adapted for an individual investor.",
          summary:
            "Faber and Richardson reverse-engineer how Yale's and Harvard's endowments allocate across equities, bonds, real assets, and alternatives, then build a simplified version an individual can actually replicate with a handful of funds.",
          learn: [
            "The endowment-style case for diversifying well beyond just stocks and bonds",
            "A simple trend-following overlay for deciding when to be in or out of an asset class",
            "Why most individual investors are structurally unable to copy an endowment's illiquid allocations — and what to do instead",
          ],
          structure:
            "First explains the endowment model, then walks step by step through building and rebalancing a simplified version of it.",
        },
      ],
      Intermediate: [
        {
          title: "Common Sense on Mutual Funds",
          author: "John C. Bogle",
          cover: "https://covers.openlibrary.org/b/id/303061-M.jpg",
          tagline: "Costs, indexing, and long-term portfolio discipline, from Vanguard's founder.",
          summary:
            "Bogle's core argument, made with decades of fund-industry data: costs compound against you exactly as returns compound for you, and most of what separates a good long-term outcome from a poor one is discipline and fees, not stock selection.",
          learn: [
            "Why expense ratios and turnover are the most reliable predictor of a fund's relative performance",
            "The mathematics of compounding costs versus compounding returns over multi-decade horizons",
            "A framework for evaluating any fund — active or passive — on its actual net-of-cost, after-tax outcome",
          ],
          structure:
            "Organized around ten or so investment 'principles,' each backed by long-run mutual fund return data.",
        },
        {
          title: "Asset Allocation: Balancing Financial Risk",
          author: "Roger C. Gibson",
          tagline: "A practitioner's rulebook for building and rebalancing a multi-asset portfolio.",
          summary:
            "A standard reference among financial advisors for constructing diversified, multi-asset portfolios — covering strategic versus tactical allocation, the mechanics of rebalancing, and how to set a client's or fund's risk tolerance into an actual mix.",
          learn: [
            "The difference between strategic (long-run target) and tactical (short-run tilt) asset allocation, and when each is appropriate",
            "Rebalancing mechanics — calendar-based versus threshold-based — and the return implications of each",
            "How to translate a stated risk tolerance into a real allocation across equities, bonds, and alternatives",
          ],
          structure:
            "Builds from the theoretical case for diversification through practical portfolio construction, ending with detailed rebalancing case studies.",
        },
        {
          title: "Unconventional Success",
          author: "David F. Swensen",
          cover: "https://covers.openlibrary.org/b/id/472541-M.jpg",
          tagline: "Yale's longtime CIO on how an individual — not an institution — should actually invest.",
          summary:
            "Swensen, who ran Yale's endowment for decades, wrote this specifically for individual investors rather than institutions — a candid look at why the mutual fund industry's incentives usually work against retail investors, and what to do about it.",
          learn: [
            "Why most actively managed mutual funds available to individuals are structurally disadvantaged by fee and tax drag",
            "A concrete, low-cost, diversified portfolio framework built from index and asset-class funds",
            "How to evaluate a fund manager's incentive structure before evaluating their track record",
          ],
          structure:
            "Opens with a critique of the fund management industry's incentives, then lays out asset-class-by-asset-class allocation guidance.",
        },
      ],
      Advanced: [
        {
          title: "Portfolio Selection",
          author: "Harry Markowitz",
          cover: "https://covers.openlibrary.org/b/id/781530-M.jpg",
          tagline: "The original Modern Portfolio Theory monograph — short, dense, and foundational.",
          summary:
            "Markowitz's original 1959 treatment of the idea that a portfolio's risk depends on the covariance between its holdings, not just each holding's own risk — the mathematical foundation everything called 'MPT' today builds on.",
          learn: [
            "The mean-variance framework: how to formally define an 'efficient' portfolio for a given risk level",
            "Why diversification's benefit comes specifically from imperfect correlation, not just from holding more names",
            "The original mathematics behind the efficient frontier, before decades of extensions and simplifications were layered on",
          ],
          structure:
            "A short, formal monograph — closer to reading a long academic paper than a trade book, building its argument through explicit mathematical derivation.",
        },
        {
          title: "Active Portfolio Management",
          author: "Richard Grinold & Ronald Kahn",
          cover: "https://covers.openlibrary.org/b/id/54093-M.jpg",
          tagline: "A quantitative framework for turning investment views into actual positions.",
          summary:
            "The standard quant-side reference for going from 'I think X will outperform' to a specific, risk-controlled position size — built around the information ratio and the idea that a manager's value-add depends on both skill and breadth of independent bets.",
          learn: [
            "The 'fundamental law of active management' — how skill and breadth combine to determine expected value-add",
            "How to size positions from a forecast plus a risk model, rather than from conviction alone",
            "Why implementation costs and constraints erode a strategy's theoretical edge in practice",
          ],
          structure:
            "Builds formally from single-asset performance measurement through multi-asset portfolio construction — assumes real comfort with statistics and linear algebra.",
        },
        {
          title: "Expected Returns",
          author: "Antti Ilmanen",
          cover: "https://covers.openlibrary.org/b/id/7508089-M.jpg",
          tagline: "A comprehensive survey of what actually drives returns across every major asset class.",
          summary:
            "Ilmanen surveys the empirical evidence behind risk premia across equities, bonds, credit, currencies, and alternatives — essentially a research-grade map of where returns have historically come from, and how confident you should be that they persist.",
          learn: [
            "The evidence (and caveats) behind major factor premia: value, momentum, carry, and volatility",
            "How risk parity and other premia-based allocation approaches are actually built, not just described",
            "Why past risk premia don't automatically imply future ones — the book's own consistent, skeptical through-line",
          ],
          structure:
            "Organized by asset class and then by risk premium, drawing heavily on academic literature — dense and reference-like rather than narrative.",
        },
      ],
    },
  },

  {
    id: "behavioral-finance",
    name: "Market Psychology & Behavioral Finance",
    subtitle:
      "Cognitive biases, market sentiment, market bubbles, trader psychology, and irrational pricing mechanics.",
    levels: {
      Beginner: [
        {
          title: "Thinking, Fast and Slow",
          author: "Daniel Kahneman",
          cover: "https://covers.openlibrary.org/b/id/13290711-M.jpg",
          tagline: "The foundational text on the two systems behind human judgment and decision-making.",
          summary:
            "Kahneman, whose work founded behavioral economics, lays out 'System 1' (fast, intuitive, bias-prone) and 'System 2' (slow, deliberate, effortful) thinking, and the specific biases — anchoring, loss aversion, overconfidence — that emerge when System 1 runs unchecked.",
          learn: [
            "The specific, named cognitive biases (anchoring, availability, loss aversion) most relevant to investment decisions",
            "Why intuitive judgment is fast and usually useful, but systematically wrong in specific, predictable situations",
            "A vocabulary for catching your own biased reasoning — the necessary first step before you can correct for it",
          ],
          structure:
            "Organized in five parts around the System 1 / System 2 distinction, prospect theory, and overconfidence — each chapter is a focused, largely self-contained idea.",
        },
        {
          title: "Extraordinary Popular Delusions and the Madness of Crowds",
          author: "Charles Mackay",
          cover: "https://covers.openlibrary.org/b/id/8804986-M.jpg",
          tagline: "The original account of crowd manias — tulip mania, the South Sea Bubble, and more.",
          summary:
            "Mackay's 1841 account of historical financial manias and crowd delusions — most famously tulip mania and the South Sea Bubble — written as a warning that collective judgment can be spectacularly, verifiably wrong.",
          learn: [
            "How a speculative mania actually builds and unwinds, told through primary 19th-century sources",
            "That 'this time is different' thinking is not a modern phenomenon — the patterns repeat across centuries",
            "Why a market price can detach entirely from any underlying value once a crowd narrative takes hold",
          ],
          structure:
            "A series of independent historical case studies (financial manias, then separate sections on other social delusions) — read the tulip mania and South Sea Bubble chapters first.",
        },
        {
          title: "Fooled by Randomness",
          author: "Nassim Nicholas Taleb",
          cover: "https://covers.openlibrary.org/b/id/855791-M.jpg",
          tagline: "Why humans see skill and pattern in what is often just noise.",
          summary:
            "Taleb argues that humans are hardwired to construct causal stories out of what is frequently pure randomness — and that in markets specifically, this leads people to mistake luck for skill, both in themselves and in others, until a large enough sample proves otherwise.",
          learn: [
            "The 'narrative fallacy' — our tendency to build a coherent story around outcomes that were actually random",
            "Why short track records (including your own) tell you far less than they feel like they do",
            "Survivorship bias: why the winners you see are a distorted sample of the population that actually took the bet",
          ],
          structure:
            "Essayistic and non-linear by design — organized around recurring ideas (randomness, survivorship, asymmetry) revisited from different angles rather than a strict argument-by-chapter structure.",
        },
      ],
      Intermediate: [
        {
          title: "Your Money and Your Brain",
          author: "Jason Zweig",
          cover: "https://covers.openlibrary.org/b/id/4698261-M.jpg",
          tagline: "The neuroscience of financial decision-making, and why your brain fights good investing.",
          summary:
            "Zweig, a longtime financial journalist, walks through neuroscience research on how the brain processes risk, reward, and loss — showing that some of investing's worst habits (chasing performance, panic-selling) are close to physiologically automatic.",
          learn: [
            "How the brain's reward circuitry responds to anticipated gains almost identically to a drug response",
            "Why loss aversion is asymmetric at a neurological level, not just a reasoning error",
            "Concrete behavioral techniques (precommitment, checklists) for working around your own wiring rather than against it",
          ],
          structure:
            "Each chapter pairs a specific investing behavior (overconfidence, herding, loss aversion) with the neuroscience research behind it.",
        },
        {
          title: "Manias, Panics, and Crashes",
          author: "Charles P. Kindleberger",
          cover: "https://covers.openlibrary.org/b/id/4416578-M.jpg",
          tagline: "A more analytical, model-driven history of financial crises than Mackay's classic account.",
          summary:
            "Kindleberger's academic-but-readable model of how financial crises unfold in stages — displacement, credit expansion, euphoria, distress, and panic — tested against dozens of historical episodes from the 1600s through the 20th century.",
          learn: [
            "A repeatable five-stage model for recognizing where in a bubble's life cycle a market currently sits",
            "How credit expansion, not just sentiment, mechanically fuels a bubble's later stages",
            "Why lender-of-last-resort intervention is a recurring — and recurringly controversial — feature of how panics end",
          ],
          structure:
            "Builds its stage-based model early, then works through historical crises roughly chronologically as supporting evidence.",
        },
        {
          title: "Nudge",
          author: "Richard H. Thaler & Cass R. Sunstein",
          cover: "https://covers.openlibrary.org/b/id/6402116-M.jpg",
          tagline: "How choice architecture shapes financial (and other) decisions, and how to design it deliberately.",
          summary:
            "Thaler and Sunstein's foundational 'choice architecture' book — not markets-specific, but essential behavioral-economics background for understanding why defaults, framing, and presentation change financial outcomes as much as the options themselves.",
          learn: [
            "Why defaults (in retirement plans, in any opt-in/opt-out system) predictably determine most people's choices",
            "The idea of 'libertarian paternalism' — preserving choice while still steering toward better outcomes",
            "How framing effects change decisions even when the underlying economics are identical",
          ],
          structure:
            "Organized by domain (savings, health, credit) with the choice-architecture framework introduced early and applied throughout.",
        },
      ],
      Advanced: [
        {
          title: "Misbehaving",
          author: "Richard H. Thaler",
          cover: "https://covers.openlibrary.org/b/id/8270508-M.jpg",
          tagline: "A first-person history of how behavioral economics became a legitimate field.",
          summary:
            "Thaler's own account of behavioral economics' decades-long fight for legitimacy against the rational-actor assumptions of classical economics — part memoir, part intellectual history, part synthesis of the field's core findings.",
          learn: [
            "The specific academic battles (and data) that forced classical economics to accept systematic irrationality",
            "Mental accounting — why people treat money differently depending on its source or intended use, against pure economic logic",
            "How behavioral findings have since been applied at the policy and institutional level, not just individually",
          ],
          structure:
            "Roughly chronological, following Thaler's own career and the field's development from marginal idea to Nobel Prize.",
        },
        {
          title: "Irrational Exuberance",
          author: "Robert J. Shiller",
          cover: "https://covers.openlibrary.org/b/id/10106123-M.jpg",
          tagline: "An academic, data-driven treatment of speculative bubbles and market psychology.",
          summary:
            "Shiller's rigorous case that markets are driven substantially by psychological and structural feedback loops rather than pure fundamentals — first published just before the dot-com crash and expanded after 2008 to cover housing.",
          learn: [
            "Shiller's cyclically-adjusted valuation framework (CAPE) and what it has actually predicted historically",
            "The specific feedback loops (media coverage, social contagion, new-era thinking) that amplify a bubble",
            "Why 'this asset class is different now' arguments recur across completely unrelated bubbles",
          ],
          structure:
            "Moves from valuation evidence, to psychological and structural causes, to policy implications — denser and more academically sourced than most behavioral-finance trade books.",
        },
        {
          title: "The Behavioral Investor",
          author: "Daniel Crosby",
          cover: "https://covers.openlibrary.org/b/id/10535401-M.jpg",
          tagline: "A practitioner's synthesis of behavioral finance into an actual portfolio-management process.",
          summary:
            "Crosby, a psychologist turned asset manager, translates decades of behavioral-finance research into a concrete process for managing money despite — not by ignoring — your own psychology, including rules-based approaches designed to remove discretion at the worst moments.",
          learn: [
            "A practical taxonomy of the biases most damaging specifically to portfolio decisions, ranked by real-world cost",
            "Why rules-based, systematic processes tend to outperform ad hoc discretion precisely because they remove bias",
            "How physiological and environmental factors (stress, screen-checking frequency) measurably degrade investment decisions",
          ],
          structure:
            "Three parts — the neurological/psychological foundation, sociological factors, and finally a concrete rules-based process for managing around all of it.",
        },
      ],
    },
  },

  {
    id: "corporate-finance",
    name: "Corporate Finance & FP&A",
    subtitle:
      "Capital budgeting, financial modeling, capital structure, business valuation, and working capital management.",
    levels: {
      Beginner: [
        {
          title: "Financial Intelligence",
          author: "Karen Berman & Joe Knight",
          cover: "https://covers.openlibrary.org/b/id/12179921-M.jpg",
          tagline: "What the numbers in a company's financial statements actually mean, for non-accountants.",
          summary:
            "Written for managers without a finance background, this walks through the income statement, balance sheet, and cash flow statement in plain language — including where the numbers involve real judgment calls, not just objective fact.",
          learn: [
            "How to actually read the three core financial statements and how they connect to each other",
            "Where GAAP accounting requires estimates and judgment (depreciation, revenue recognition) rather than hard fact",
            "Basic profitability and efficiency ratios, and what each one is actually telling you",
          ],
          structure:
            "Works through each financial statement in turn, then moves to ratio analysis and a short section on using financial intelligence to run a team or a budget.",
        },
        {
          title: "Warren Buffett and the Interpretation of Financial Statements",
          author: "Mary Buffett & David Clark",
          cover: "https://covers.openlibrary.org/b/id/6938196-M.jpg",
          tagline: "Reading an income statement and balance sheet the way Buffett looks for a durable moat.",
          summary:
            "A line-by-line walkthrough of financial statements through the specific lens Buffett is said to use — looking for the balance sheet and margin signatures of a business with a durable competitive advantage.",
          learn: [
            "Specific balance sheet and margin patterns (gross margin stability, low debt, high return on equity) associated with moat businesses",
            "How to read a statement line by line rather than jumping straight to summary ratios",
            "The limits of this approach — it's a heuristic for spotting quality, not a full valuation methodology",
          ],
          structure:
            "Short chapters, each focused on one specific line item or ratio and what a 'good' versus 'bad' number tends to look like.",
        },
        {
          title: "Financial Statements",
          author: "Thomas R. Ittelson",
          cover: "https://covers.openlibrary.org/b/id/799610-M.jpg",
          tagline: "A step-by-step, workbook-style guide to building and reading financial reports from scratch.",
          summary:
            "A practical, example-driven primer that builds a company's financial statements from individual transactions upward, so the connections between a sale, an invoice, and the eventual income statement and balance sheet entries are concrete rather than abstract.",
          learn: [
            "How a single business transaction flows through to each of the three financial statements",
            "The mechanical relationship between the income statement, balance sheet, and cash flow statement",
            "Basic working-capital concepts — receivables, payables, inventory — from the ground up",
          ],
          structure:
            "Builds a fictional company's books transaction by transaction, then walks through the resulting statements — closer to a workbook than a narrative book.",
        },
      ],
      Intermediate: [
        {
          title: "Financial Modeling and Valuation",
          author: "Paul Pignataro",
          tagline: "A practical, build-it-yourself guide to the models used in investment banking and private equity.",
          summary:
            "A hands-on guide to actually building the three-statement models, DCFs, comps, and LBO models used in banking and PE — less theory, more 'open a spreadsheet and build this alongside the book.'",
          learn: [
            "How to build a fully linked three-statement model from a company's historical filings",
            "The mechanics of a discounted cash flow and a comparable-companies analysis, step by step",
            "A working LBO model structure, including debt schedules and returns calculations",
          ],
          structure:
            "Organized as a sequential build: three-statement model first, then DCF, then comps, then LBO — each chapter assumes you've built the previous model.",
        },
        {
          title: "Financial Shenanigans",
          author: "Howard Schilit",
          cover: "https://covers.openlibrary.org/b/id/57853-M.jpg",
          tagline: "How companies manipulate their numbers, and the specific red flags that give it away.",
          summary:
            "A taxonomy of the specific accounting techniques companies have historically used to inflate earnings or hide problems — revenue recognition games, expense shifting, off-balance-sheet items — each illustrated with real, named corporate cases.",
          learn: [
            "A working list of specific red flags in revenue recognition, expense timing, and cash flow presentation",
            "How to cross-check the income statement against the cash flow statement to catch earnings quality problems",
            "Named historical case studies (Enron, WorldCom, and others) walked through in enough detail to recognize the pattern elsewhere",
          ],
          structure:
            "Organized around specific categories of accounting manipulation (revenue, expenses, cash flow, key metrics), each with real-company case studies.",
        },
        {
          title: "Damodaran on Valuation",
          author: "Aswath Damodaran",
          cover: "https://covers.openlibrary.org/b/id/1241370-M.jpg",
          tagline: "Security-analysis and corporate-finance valuation approaches, compared side by side.",
          summary:
            "Damodaran systematically compares valuation approaches — discounted cash flow, relative valuation, option pricing applied to equity — across different industries and company situations, with an emphasis on where each approach breaks down.",
          learn: [
            "When a DCF, a multiples-based comp, or an option-pricing approach is actually the right tool for a given company",
            "How to adjust standard valuation approaches for young, cyclical, or distressed companies where the assumptions break",
            "The cost-of-capital assumptions embedded in every valuation, and how sensitive the output is to them",
          ],
          structure:
            "Organized by valuation approach first, then by special situations (young companies, financial firms, cyclicals) where the standard approach needs adjustment.",
        },
      ],
      Advanced: [
        {
          title: "Valuation: Measuring and Managing the Value of Companies",
          author: "McKinsey & Company (Tim Koller, Marc Goedhart & David Wessels)",
          tagline: "The industry-standard DCF and multiples framework used across banking and consulting.",
          summary:
            "The reference text most banking and consulting valuation training is built on — a rigorous, comprehensive treatment of DCF and multiples valuation, capital structure, and value creation, grounded in decades of McKinsey client work.",
          learn: [
            "A rigorous ROIC-and-growth framework for decomposing exactly where a company's value comes from",
            "How capital structure and payout policy do (and mostly don't) create value, with the underlying logic spelled out",
            "Advanced valuation adjustments for multi-business conglomerates, cyclical companies, and emerging markets",
          ],
          structure:
            "A long reference text organized in parts — valuation fundamentals, advanced topics (M&A, capital structure), and industry-specific applications — meant to be consulted, not read cover to cover in one sitting.",
        },
        {
          title: "Principles of Corporate Finance",
          author: "Richard Brealey, Stewart Myers & Franklin Allen",
          cover: "https://covers.openlibrary.org/b/id/4229284-M.jpg",
          tagline: "The standard MBA corporate finance textbook — capital structure, cost of capital, payout policy.",
          summary:
            "The most widely used corporate finance textbook in MBA programs, covering capital budgeting, the cost of capital, capital structure theory (Modigliani-Miller and its real-world qualifications), and payout policy with full academic rigor.",
          learn: [
            "Net present value and capital budgeting as the formal decision rule underlying all corporate investment choices",
            "Modigliani-Miller's capital structure irrelevance theorem, and precisely which real-world frictions make capital structure matter after all",
            "The theory behind dividend policy, share buybacks, and how markets interpret each",
          ],
          structure:
            "A comprehensive academic textbook — capital budgeting, then risk and return, then financing decisions, then a section on options and their corporate finance applications.",
        },
        {
          title: "Applied Corporate Finance",
          author: "Aswath Damodaran",
          cover: "https://covers.openlibrary.org/b/id/1243943-M.jpg",
          tagline: "A more applied, less formulaic take on corporate finance decisions than a standard textbook.",
          summary:
            "Damodaran deliberately avoids formula-first teaching, instead walking through real corporate decisions — how much debt to take on, what to do with excess cash, how to evaluate an acquisition — as CFOs actually face them.",
          learn: [
            "A decision-framework (not just formulas) for a company's optimal capital structure given its specific cash flows and risk",
            "How to evaluate whether a company should return cash via dividends or buybacks, and why the tax and signaling effects differ",
            "Real-company case studies applying every major corporate finance decision covered in the book",
          ],
          structure:
            "Organized around the corporate finance decisions themselves (financing, dividend policy, valuation for M&A) rather than around formulas, each grounded in real company examples.",
        },
      ],
    },
  },

  {
    id: "ib-pe-ma",
    name: "Investment Banking, Private Equity & M&A",
    subtitle:
      "Deal structuring, Leveraged Buyouts (LBOs), venture capital, startup funding, and underwriting.",
    levels: {
      Beginner: [
        {
          title: "Zero to One",
          author: "Peter Thiel",
          cover: "https://covers.openlibrary.org/b/id/9002334-M.jpg",
          tagline: "How to think about building — and backing — something genuinely new.",
          summary:
            "Thiel's contrarian argument that the biggest returns come from creating genuine monopolies through novel technology, not from competing in existing markets — essential context for understanding how venture capitalists actually evaluate startups.",
          learn: [
            "Why VCs specifically look for defensible, monopoly-like businesses rather than competitive advantage in a crowded market",
            "The 'power law' idea that a handful of investments drive nearly all of a venture fund's returns",
            "A founder's-eye framework for what makes a startup fundable in the first place",
          ],
          structure:
            "A series of short, argumentative essays on distinct topics (monopoly, secrets, the power law) rather than a single linear argument.",
        },
        {
          title: "Barbarians at the Gate",
          author: "Bryan Burrough & John Helyar",
          cover: "https://covers.openlibrary.org/b/id/4095854-M.jpg",
          tagline: "The classic narrative of the RJR Nabisco leveraged buyout — still the way most people learn what an LBO is.",
          summary:
            "A blow-by-blow account of the 1988 fight over RJR Nabisco, in which a management buyout attempt turned into a bidding war among the era's biggest LBO shops — told as a genuine business thriller, with enough deal mechanics to teach the basics of an LBO along the way.",
          learn: [
            "The basic structure and incentives of a leveraged buyout, taught through a real, dramatic example",
            "How competing bidders, investment banks, and boards actually behave in a live deal process",
            "Why management incentives in a buyout can create real conflicts of interest with shareholders",
          ],
          structure:
            "A chronological narrative following the deal from initial buyout rumor through the final bidding war and close.",
        },
        {
          title: "Venture Deals",
          author: "Brad Feld & Jason Mendelson",
          cover: "https://covers.openlibrary.org/b/id/8732100-M.jpg",
          tagline: "Term sheets, cap tables, and negotiation mechanics, from people who've sat on both sides.",
          summary:
            "Two career venture capitalists walk through an actual startup term sheet clause by clause — liquidation preferences, anti-dilution, board control — explaining what each term means and how it gets negotiated in practice.",
          learn: [
            "How to read a term sheet clause by clause, understanding what each provision protects and for whom",
            "The mechanics of a cap table and how dilution actually plays out across multiple funding rounds",
            "Negotiation dynamics specific to venture deals, including where founders typically have — and don't have — real leverage",
          ],
          structure:
            "Organized around the actual sections of a term sheet, in the order they'd typically appear, with negotiation notes on each.",
        },
      ],
      Intermediate: [
        {
          title: "Investment Banking",
          author: "Joshua Rosenbaum & Joshua Pearl",
          cover: "https://covers.openlibrary.org/b/id/9233432-M.jpg",
          tagline: "Valuation, LBOs, M&A, and IPOs — the standard technical training manual for the industry.",
          summary:
            "The closest thing the industry has to an official training manual — walking step by step through comparable companies analysis, precedent transactions, DCF, LBO modeling, and M&A analysis exactly as junior bankers are trained to build them.",
          learn: [
            "A precise, replicable process for building comps, precedent transaction analysis, and a DCF from scratch",
            "How an LBO model is actually built and what drives the resulting returns (leverage, multiple expansion, cash generation)",
            "How M&A accretion/dilution analysis works and what it does (and doesn't) tell you about a deal's merit",
          ],
          structure:
            "A sequential build across valuation methodologies, then LBO analysis, then M&A analysis — closely mirrors an actual banking analyst training program.",
        },
        {
          title: "The Power Law",
          author: "Sebastian Mallaby",
          cover: "https://covers.openlibrary.org/b/id/12855991-M.jpg",
          tagline: "A history of venture capital — how the industry actually finds and funds outliers.",
          summary:
            "Mallaby traces venture capital's evolution from its earliest Silicon Valley origins through today's mega-funds, arguing that the entire industry's structure and behavior follows from one fact: a tiny number of investments generate almost all the returns.",
          learn: [
            "Why venture returns follow a power law, not a normal distribution, and how that reshapes every fund decision",
            "How the venture industry's structure (fund sizes, follow-on strategy, board involvement) evolved in response to that math",
            "The actual historical relationship between VCs and the founders they back, including where the popular narrative oversimplifies it",
          ],
          structure:
            "Roughly chronological by era and firm (Arthur Rock and the earliest VCs, through Sequoia, through SoftBank's Vision Fund), each illustrating a different phase of the industry.",
        },
        {
          title: "The Business of Venture Capital",
          author: "Mahendra Ramsinghani",
          cover: "https://covers.openlibrary.org/b/id/12653659-M.jpg",
          tagline: "How a VC fund itself actually gets raised, structured, and run.",
          summary:
            "Unlike most VC books, which focus on evaluating startups, this one covers the fund itself — how a VC raises money from limited partners, structures the fund's economics, and manages a portfolio over its full life cycle.",
          learn: [
            "How a venture fund raises capital from limited partners and what LPs actually look for",
            "Fund economics — carried interest, management fees, and fund lifecycle — from the GP's side of the table",
            "Portfolio construction and follow-on investment decisions across a fund's full ten-year-plus life",
          ],
          structure:
            "Follows a fund's life cycle in order: fundraising, sourcing deals, structuring investments, board governance, and eventual exits.",
        },
      ],
      Advanced: [
        {
          title: "Mastering Private Equity",
          author: "Claudia Zeisberger, Michael Prahl & Bowen White",
          cover: "https://covers.openlibrary.org/b/id/9388427-M.jpg",
          tagline: "PE fund mechanics, valuation, and case studies from the institutional side of the industry.",
          summary:
            "A comprehensive, case-study-driven treatment of private equity from the fund manager's side — deal sourcing, value creation levers, fund structuring, and exits — written for people who intend to actually work in or allocate to the asset class.",
          learn: [
            "The specific levers (operational improvement, multiple arbitrage, leverage) PE funds use to create value post-acquisition",
            "How PE fund economics (carry, hurdle rates, waterfalls) actually work and are negotiated with LPs",
            "Detailed real-deal case studies covering sourcing, diligence, and exit across different PE strategies (buyout, growth, distressed)",
          ],
          structure:
            "Organized around the PE investment life cycle — fundraising, sourcing, value creation, exit — with full case studies at the end of each section.",
        },
        {
          title: "King of Capital",
          author: "David Carey & John E. Morris",
          cover: "https://covers.openlibrary.org/b/id/9380837-M.jpg",
          tagline: "The rise of Blackstone and the modern private equity industry, told in institutional detail.",
          summary:
            "A detailed history of Blackstone's rise from a small M&A advisory boutique to the world's largest alternative asset manager, used as a window into how the modern private equity industry actually built its playbook over four decades.",
          learn: [
            "How the PE industry's fee and fund structures evolved as firms scaled from single funds to multi-strategy platforms",
            "Specific, detailed deal case studies (and a few notable failures) from Blackstone's history",
            "How a PE firm diversifies beyond buyouts into real estate, credit, and other strategies over time",
          ],
          structure:
            "A chronological institutional history of one firm, organized by era and by major deal, doubling as a history of the broader PE industry.",
        },
        {
          title: "The Hard Thing About Hard Things",
          author: "Ben Horowitz",
          cover: "https://covers.openlibrary.org/b/id/7279515-M.jpg",
          tagline: "Operating a company through decisions with no good options — useful diligence context, not just for founders.",
          summary:
            "Horowitz, a founder turned VC, writes candidly about the genuinely difficult operating decisions inside a company under pressure — layoffs, near-failure, executive conflict — offering a realistic counterweight to how clean a deal or a pitch can look from the outside.",
          learn: [
            "What actually goes wrong inside portfolio companies, beyond what shows up in a clean board deck",
            "How founders and executives make high-stakes personnel and strategic decisions under real uncertainty",
            "Why diligence on management quality often matters as much as diligence on the numbers",
          ],
          structure:
            "Short, topic-based chapters drawn from Horowitz's own operating experience, each centered on one specific hard decision.",
        },
      ],
    },
  },

  {
    id: "asset-management-equity-research",
    name: "Asset Management & Equity Research",
    subtitle:
      "Fundamental stock analysis, fixed income strategies, index funds, and public equity pitch frameworks.",
    levels: {
      Beginner: [
        {
          title: "The Intelligent Investor",
          author: "Benjamin Graham",
          cover: "https://covers.openlibrary.org/b/id/36434-M.jpg",
          tagline: "Margin of safety and Mr. Market — the two ideas everything else in value investing builds on.",
          summary:
            "Graham's foundational case for buying securities below their intrinsic value with a margin for error, and for treating market price swings ('Mr. Market') as an opportunity to exploit rather than a signal to follow.",
          learn: [
            "The margin-of-safety concept — buying with enough of a discount that being partly wrong doesn't cost you",
            "How to think about market prices as an offer, not a verdict on a business's actual worth",
            "The practical distinction Graham draws between a defensive and an enterprising investor, and what each should actually do",
          ],
          structure:
            "Alternates between general investment philosophy chapters and more technical chapters on security selection — the philosophy chapters (especially on Mr. Market and margin of safety) are the most load-bearing.",
        },
        {
          title: "Common Stocks and Uncommon Profits",
          author: "Philip Fisher",
          cover: "https://covers.openlibrary.org/b/id/788750-M.jpg",
          tagline: "Judging management quality and growth potential — the qualitative half of picking a company.",
          summary:
            "Fisher's classic complement to Graham's numbers-first approach, arguing that a company's growth prospects and management quality — assessed through qualitative research like talking to competitors and customers — matter as much as anything on the balance sheet.",
          learn: [
            "The famous 'fifteen points' checklist for evaluating a growth company's long-term prospects",
            "Fisher's 'scuttlebutt' method — gathering qualitative information from customers, competitors, and former employees",
            "Why paying a fair price for an exceptional business can beat a cheap price for a mediocre one",
          ],
          structure:
            "Centers on the fifteen-point checklist, with surrounding chapters on when to buy, when to sell, and the specific risks of dividend-focused investing.",
        },
        {
          title: "One Up On Wall Street",
          author: "Peter Lynch",
          cover: "https://covers.openlibrary.org/b/id/6241104-M.jpg",
          tagline: "How an individual investor can actually spot a great stock before Wall Street catches on.",
          summary:
            "Lynch, who ran Fidelity's Magellan Fund to a legendary track record, argues that individual investors have a real edge in noticing good businesses from everyday life — and lays out a practical framework for turning that observation into real research.",
          learn: [
            "Lynch's category system for stock types (slow growers, stalwarts, fast growers, turnarounds) and how to value each differently",
            "How to translate an everyday observation ('this store is always busy') into an actual research process",
            "Concrete checklist items to verify before buying, and specific reasons to sell that have nothing to do with price alone",
          ],
          structure:
            "Opens with Lynch's personal approach to idea generation, then works through his stock categories, then closes with portfolio management and when-to-sell guidance.",
        },
      ],
      Intermediate: [
        {
          title: "You Can Be a Stock Market Genius",
          author: "Joel Greenblatt",
          cover: "https://covers.openlibrary.org/b/id/426290-M.jpg",
          tagline: "Spinoffs, mergers, and special situations most investors skip past — with the reasoning shown in full.",
          summary:
            "Greenblatt argues that some of the market's least efficiently priced opportunities are 'special situations' — spinoffs, mergers, bankruptcies — that most investors ignore simply because they take extra work to understand, and walks through his own reasoning on real examples.",
          learn: [
            "Why spinoffs are specifically prone to short-term mispricing (forced selling, index exclusion, no analyst coverage)",
            "A concrete process for analyzing merger arbitrage and bankruptcy-reorganization situations",
            "How to think about position sizing in less-liquid, less-followed special situations",
          ],
          structure:
            "Organized by special-situation type (spinoffs, mergers, bankruptcies, rights offerings), each with real worked examples from Greenblatt's own investing.",
        },
        {
          title: "The Bond Book",
          author: "Annette Thau",
          cover: "https://covers.openlibrary.org/b/id/56971-M.jpg",
          tagline: "A practitioner's guide to fixed income — Treasurys, munis, corporates, and everything between.",
          summary:
            "A comprehensive, practically oriented guide to the bond market across every major sector — Treasurys, municipals, corporates, and mortgage-backed securities — covering pricing, credit risk, and duration in accessible terms.",
          learn: [
            "How bond pricing, yield, and duration actually relate to each other and to interest rate moves",
            "The distinct credit and tax considerations across Treasury, municipal, and corporate bonds",
            "Practical portfolio construction for fixed income, including laddering and managing interest rate risk",
          ],
          structure:
            "Organized by bond sector (Treasurys, munis, corporates, mortgage-backed) with a foundational section on pricing and yield mechanics up front.",
        },
        {
          title: "Poor Charlie's Almanack",
          author: "Charlie Munger (edited by Peter Kaufman)",
          cover: "https://covers.openlibrary.org/b/id/8337563-M.jpg",
          tagline: "Mental models and multidisciplinary thinking, applied to business judgment and equity research.",
          summary:
            "A collection of Munger's speeches and writings on 'worldly wisdom' — the idea that good judgment comes from a latticework of mental models borrowed from psychology, biology, and other fields, applied rigorously to evaluating businesses and avoiding stupid decisions.",
          learn: [
            "Munger's specific, named cognitive biases ('misjudgment' tendencies) and how they distort investment decisions",
            "The 'latticework of mental models' approach to analysis — borrowing frameworks across disciplines rather than staying purely financial",
            "Munger's inversion technique — solving a problem by identifying how to guarantee failure, then avoiding that",
          ],
          structure:
            "A large collection of individual speeches and talks, not a single narrative — the 'The Psychology of Human Misjudgment' talk is the most commonly cited single piece.",
        },
      ],
      Advanced: [
        {
          title: "Security Analysis",
          author: "Benjamin Graham & David Dodd",
          cover: "https://covers.openlibrary.org/b/id/60206-M.jpg",
          tagline: "The original, technical valuation textbook — denser and more rigorous than The Intelligent Investor.",
          summary:
            "The 1934 textbook that founded the discipline of security analysis, laying out rigorous, quantitative standards for evaluating bonds and stocks in far more technical depth than Graham's later, more popular book.",
          learn: [
            "Formal, quantitative standards Graham and Dodd used to classify a security as genuinely undervalued versus merely cheap-looking",
            "Rigorous bond analysis and credit assessment, an area later value-investing books cover far more lightly",
            "The historical foundation for nearly every value-investing framework that followed, including Buffett's own",
          ],
          structure:
            "An extensive, technical reference organized around security types (bonds, preferred stock, common stock) with detailed quantitative criteria for each.",
        },
        {
          title: "Margin of Safety",
          author: "Seth Klarman",
          cover: "https://covers.openlibrary.org/b/id/8042651-M.jpg",
          tagline: "Risk-averse value investing from a hedge fund manager — out of print, but worth finding.",
          summary:
            "Klarman's own, more risk-focused extension of Graham's philosophy, written from his own experience running the Baupost Group — emphasizing capital preservation, absolute (not relative) returns, and skepticism of anything resembling a hot market consensus.",
          learn: [
            "Klarman's emphasis on absolute returns and capital preservation over benchmark-relative performance",
            "How to think about less-followed, less-liquid asset classes (distressed debt, illiquid securities) where a margin of safety is easier to find",
            "A rigorous case against market-timing and forecasting in favor of bottom-up, price-driven decision-making",
          ],
          structure:
            "Splits between investment philosophy chapters and more technical chapters on specific asset classes (distressed securities, real estate, event-driven situations) — long out of print, so expect to pay up or find a library copy.",
        },
        {
          title: "Fixed Income Securities",
          author: "Bruce Tuckman & Angel Serrat",
          tagline: "The standard advanced fixed income textbook — pricing, term structure, and derivatives.",
          summary:
            "A rigorous, quantitative treatment of fixed income markets — bond pricing mechanics, the term structure of interest rates, and fixed income derivatives — used widely in graduate finance programs and by fixed income professionals.",
          learn: [
            "The mathematics of bond pricing, duration, and convexity in full rigor, beyond the intuitive versions taught elsewhere",
            "How the term structure of interest rates is modeled and what it implies about market expectations",
            "The mechanics and pricing logic of interest rate derivatives (swaps, futures, options) used to hedge fixed income risk",
          ],
          structure:
            "A graduate-level textbook progressing from bond pricing fundamentals through term structure modeling to fixed income derivatives — assumes real quantitative fluency.",
        },
      ],
    },
  },

  {
    id: "quant-finance",
    name: "Quantitative Finance & Algorithmic Trading",
    subtitle:
      "Financial engineering, options pricing models, statistical arbitrage, Python/C++ applications, and market microstructure.",
    levels: {
      Beginner: [
        {
          title: "A Man for All Markets",
          author: "Edward O. Thorp",
          cover: "https://covers.openlibrary.org/b/id/8822906-M.jpg",
          tagline: "The memoir of the mathematician who beat blackjack, then built one of the first quant hedge funds.",
          summary:
            "Thorp's own account of moving from card-counting theory (he wrote the book that founded it) to pricing early convertible bond and options mismatches, effectively inventing quantitative hedge fund investing along the way.",
          learn: [
            "How probabilistic, edge-based thinking transfers directly from gambling into markets",
            "An intuitive, first-person introduction to option mispricing before Black-Scholes formalized it",
            "Position sizing under uncertainty (the Kelly criterion) explained through Thorp's own real decisions",
          ],
          structure:
            "A chronological memoir — the blackjack material comes first and builds the probabilistic intuition the later, markets-focused chapters rely on.",
        },
        {
          title: "Python for Finance",
          author: "Yves Hilpisch",
          cover: "https://covers.openlibrary.org/b/id/8513533-M.jpg",
          tagline: "A hands-on introduction to using Python for financial data analysis and modeling.",
          summary:
            "A practical, code-along introduction to using Python's data and numerical libraries for financial applications — pulling market data, backtesting simple strategies, and pricing basic derivatives.",
          learn: [
            "The core Python data-analysis stack (NumPy, pandas) applied specifically to financial time series",
            "How to pull, clean, and analyze real market data programmatically instead of in a spreadsheet",
            "Basic backtesting mechanics for a simple trading strategy, including the pitfalls that make naive backtests misleading",
          ],
          structure:
            "Builds Python fluency first, then applies it progressively to financial data analysis, simple strategy backtesting, and basic derivatives pricing.",
        },
        {
          title: "Quantitative Trading",
          author: "Ernest P. Chan",
          cover: "https://covers.openlibrary.org/b/id/6739594-M.jpg",
          tagline: "A practical, hands-on introduction to building and backtesting systematic strategies.",
          summary:
            "Chan, a former quant fund manager, wrote this specifically for individuals trying to build their first systematic strategy — covering backtesting pitfalls, data quality issues, and the realistic gap between a backtest and live trading.",
          learn: [
            "The most common backtesting mistakes (survivorship bias, look-ahead bias) that make a strategy look better than it is",
            "How to realistically account for transaction costs and slippage before trusting a backtest",
            "A framework for evaluating whether a strategy's edge is genuine or a statistical artifact of the sample period",
          ],
          structure:
            "Follows the actual process of building a systematic strategy from idea through backtesting to live execution, in that order.",
        },
      ],
      Intermediate: [
        {
          title: "Algorithmic Trading: Winning Strategies and Their Rationale",
          author: "Ernest P. Chan",
          tagline: "Specific, testable mean-reversion and momentum strategies, with the underlying logic explained.",
          summary:
            "A follow-up to Chan's first book, going deeper into specific strategy families — mean reversion, momentum, and pairs trading — with the statistical and economic rationale for why each one has historically worked, and where it stops.",
          learn: [
            "The statistical tests (cointegration, stationarity) used to validate a pairs-trading or mean-reversion strategy",
            "Why momentum and mean-reversion coexist across different timeframes and asset classes",
            "How regime changes and capacity constraints erode a systematic strategy's edge over time",
          ],
          structure:
            "Organized by strategy family, each chapter pairing a specific statistical technique with a concrete example implementation.",
        },
        {
          title: "Trading and Exchanges",
          author: "Larry Harris",
          cover: "https://covers.openlibrary.org/b/id/125428-M.jpg",
          tagline: "Market microstructure for practitioners — how order books, market makers, and exchanges actually work.",
          summary:
            "The standard reference on market microstructure — how orders actually get matched, what market makers and other trader types are doing, and how exchange rules and market design shape trading costs and behavior.",
          learn: [
            "How an order book and price-time priority actually function, mechanically, at the exchange level",
            "The distinct roles and incentives of different trader types (market makers, informed traders, liquidity traders)",
            "How market structure and exchange rules directly affect trading costs and strategy design",
          ],
          structure:
            "Organized in three parts — trading basics, the roles different trader types play, and how exchange structure and regulation shape all of it.",
        },
        {
          title: "Options, Futures, and Other Derivatives",
          author: "John C. Hull",
          cover: "https://covers.openlibrary.org/b/id/80753-M.jpg",
          tagline: "The standard derivatives and quantitative finance textbook — pricing, hedging, and risk.",
          summary:
            "The most widely used derivatives textbook in graduate finance programs, covering options and futures pricing, hedging strategies, and the mathematical models (including Black-Scholes) underlying modern derivatives markets.",
          learn: [
            "The Black-Scholes-Merton framework for options pricing, derived and explained in full",
            "Practical hedging strategies (delta, gamma, vega hedging) for managing a derivatives book",
            "How futures, forwards, swaps, and options are priced relative to each other through no-arbitrage arguments",
          ],
          structure:
            "Builds from basic futures and options mechanics through pricing theory to more advanced topics (exotic options, credit derivatives) in later chapters.",
        },
      ],
      Advanced: [
        {
          title: "Advances in Financial Machine Learning",
          author: "Marcos López de Prado",
          cover: "https://covers.openlibrary.org/b/id/9224592-M.jpg",
          tagline: "Modern ML techniques applied to markets — assumes real fluency in statistics and programming.",
          summary:
            "López de Prado, a former quant fund CIO, argues that most standard machine learning techniques fail when applied naively to financial data, and provides specific, rigorous fixes — from data labeling to cross-validation — designed for the particular statistical problems markets present.",
          learn: [
            "Why standard ML cross-validation techniques systematically overfit financial time series, and how to fix it",
            "Specific labeling and sampling techniques (the triple-barrier method, meta-labeling) built for financial data",
            "How to realistically backtest an ML-based strategy without falling into the same traps as traditional backtesting",
          ],
          structure:
            "Organized around the ML pipeline as applied to finance — data structuring, labeling, feature importance, cross-validation, and backtesting — assumes graduate-level stats and coding fluency.",
        },
        {
          title: "Dynamic Hedging",
          author: "Nassim Nicholas Taleb",
          cover: "https://covers.openlibrary.org/b/id/301286-M.jpg",
          tagline: "A dense, technical treatment of managing vanilla and exotic options risk in practice.",
          summary:
            "Written from Taleb's own experience as an options trader, this is a highly technical, practitioner-focused book on actually managing an options book's risk — the practical realities of delta, gamma, and vega hedging that more theoretical texts gloss over.",
          learn: [
            "The practical, trader's-eye version of Greeks-based hedging, including where textbook hedging assumptions break down live",
            "How exotic option structures behave differently from vanilla options under real hedging conditions",
            "Volatility surface dynamics and why implied volatility isn't flat across strikes and maturities in practice",
          ],
          structure:
            "Organized by hedging problem and option type rather than by pricing theory — dense and notation-heavy, written for working options traders.",
        },
        {
          title: "The Concepts and Practice of Mathematical Finance",
          author: "Mark S. Joshi",
          cover: "https://covers.openlibrary.org/b/id/357680-M.jpg",
          tagline: "A rigorous graduate-level reference on derivatives pricing theory.",
          summary:
            "A comprehensive, mathematically rigorous treatment of derivatives pricing theory, widely used by quants studying for professional financial-mathematics certifications and as a graduate-level reference on option pricing models beyond Black-Scholes.",
          learn: [
            "The full mathematical machinery (stochastic calculus, martingale pricing) underlying modern derivatives pricing",
            "A range of pricing models beyond Black-Scholes, including their assumptions and where each is appropriate",
            "Numerical methods (Monte Carlo, finite differences) used to price derivatives without closed-form solutions",
          ],
          structure:
            "A graduate-level mathematical reference, progressing from probability and stochastic calculus foundations to specific pricing models and numerical methods — assumes real fluency in advanced mathematics.",
        },
      ],
    },
  },

  {
    id: "macro-global-markets",
    name: "Macroeconomics & Global Markets",
    subtitle:
      "Central bank policy, yield curves, foreign exchange (FX), commodities, and systemic risk analysis.",
    levels: {
      Beginner: [
        {
          title: "The Big Short",
          author: "Michael Lewis",
          cover: "https://covers.openlibrary.org/b/id/6386926-M.jpg",
          tagline: "How a handful of investors saw the 2008 subprime crisis coming, and bet against it.",
          summary:
            "Lewis's account of the small group of investors who correctly identified that mortgage-backed securities were mispriced ahead of the 2008 financial crisis, and the mechanics of the credit default swaps and CDOs they used to bet against them.",
          learn: [
            "How mortgage-backed securities and CDOs were actually structured, and where the ratings process failed",
            "Why being early and being right aren't the same thing — most of these investors nearly lost their positions before being proven correct",
            "A systemic-risk case study in how localized mortgage losses cascaded through the entire financial system",
          ],
          structure:
            "Follows several investors' parallel storylines chronologically, converging on the 2008 crisis itself — reads as narrative nonfiction rather than a textbook.",
        },
        {
          title: "Currency Wars",
          author: "James Rickards",
          cover: "https://covers.openlibrary.org/b/id/7010379-M.jpg",
          tagline: "An accessible, geopolitically framed introduction to foreign exchange and currency conflict.",
          summary:
            "Rickards, a former hedge fund general counsel, frames currency policy as an ongoing geopolitical conflict between nations competitively devaluing their currencies — an accessible entry point into how FX, capital flows, and monetary policy interact.",
          learn: [
            "The basic mechanics of currency devaluation and why nations pursue it despite the risks",
            "How capital flows and currency policy connect to broader geopolitical and trade tensions",
            "A historical framework (previous 'currency wars' in the 20th century) for interpreting current FX policy debates",
          ],
          structure:
            "Opens with a hypothetical future crisis scenario, then works backward through historical currency conflicts to build the analytical framework.",
        },
        {
          title: "The Ascent of Money",
          author: "Niall Ferguson",
          cover: "https://covers.openlibrary.org/b/id/6327852-M.jpg",
          tagline: "A financial history of the world, from ancient credit to modern derivatives.",
          summary:
            "Ferguson's sweeping financial history covers the invention of credit, bonds, stock markets, insurance, and real estate finance, showing how each financial innovation reshaped — and was reshaped by — the broader course of world events.",
          learn: [
            "The historical origins of bonds, stock markets, and insurance, and the specific problems each was invented to solve",
            "How financial innovation and major historical events (wars, empires, crises) have repeatedly driven each other",
            "A long-run historical perspective on financial crises that makes any single modern crisis look less unprecedented",
          ],
          structure:
            "Organized by financial innovation (credit, bonds, stocks, insurance, real estate) roughly in the historical order each emerged.",
        },
      ],
      Intermediate: [
        {
          title: "This Time Is Different",
          author: "Carmen M. Reinhart & Kenneth S. Rogoff",
          cover: "https://covers.openlibrary.org/b/id/10193793-M.jpg",
          tagline: "Eight centuries of financial crises, backed by an unprecedented historical dataset.",
          summary:
            "Reinhart and Rogoff assembled data on financial crises across dozens of countries and eight centuries to test the recurring claim that 'this time is different' — finding that sovereign defaults, banking crises, and currency crashes follow remarkably consistent patterns.",
          learn: [
            "A data-driven taxonomy of crisis types (sovereign default, banking crisis, currency crash) and how they relate",
            "Why high debt-to-GDP levels have historically preceded slower growth and higher crisis risk across very different countries and eras",
            "How to evaluate 'this time is different' arguments skeptically, using the historical base rate as a check",
          ],
          structure:
            "Organized by crisis type, drawing on the authors' own extensive historical database — more empirical and data-driven than narrative.",
        },
        {
          title: "Exorbitant Privilege",
          author: "Barry Eichengreen",
          cover: "https://covers.openlibrary.org/b/id/9075204-M.jpg",
          tagline: "The dollar's rise as the world's reserve currency, and what that status actually confers.",
          summary:
            "Eichengreen traces how the U.S. dollar became the world's dominant reserve currency after World War II, what concrete economic benefits ('exorbitant privilege') that status provides, and the historical and current challenges to its continued dominance.",
          learn: [
            "What being the world's reserve currency actually means in practice — lower borrowing costs, deeper capital markets",
            "The historical process by which the dollar displaced the British pound, as a model for how reserve currency status can shift",
            "Specific current challenges (the euro, the renminbi) to continued dollar dominance and how seriously to weigh each",
          ],
          structure:
            "Largely chronological — the dollar's rise after Bretton Woods, its several crises of confidence, and the current landscape of potential rivals.",
        },
        {
          title: "The Lords of Finance",
          author: "Liaquat Ahamed",
          tagline: "The central bankers whose decisions between the World Wars helped cause the Great Depression.",
          summary:
            "A Pulitzer Prize-winning account of the four central bank governors — of the U.S., U.K., France, and Germany — whose interwar monetary decisions, especially around the gold standard, are widely credited with deepening the Great Depression.",
          learn: [
            "How the gold standard actually constrained monetary policy, and why abandoning it was so politically difficult",
            "The specific, human decision-making (not just abstract policy) behind one of history's largest central banking failures",
            "A historical case for why central bank independence and coordination matter, told through what happens when they fail",
          ],
          structure:
            "A parallel narrative following four central bankers chronologically from World War I through the early Depression years.",
        },
      ],
      Advanced: [
        {
          title: "Principles for Navigating Big Debt Crises",
          author: "Ray Dalio",
          cover: "https://covers.openlibrary.org/b/id/11980955-M.jpg",
          tagline: "Bridgewater's founder on the mechanics of debt cycles and systemic financial crises.",
          summary:
            "Dalio lays out a detailed, mechanical template for how large debt crises unfold — deleveraging, currency devaluation, debt restructuring — built from Bridgewater's internal research across dozens of historical crises, aimed at investors and policymakers alike.",
          learn: [
            "A specific, repeatable template for the stages of a debt crisis and the policy responses available at each stage",
            "The difference between an inflationary and a deflationary deleveraging, and why the right policy response differs completely",
            "Detailed historical case studies (Weimar Germany, the U.S. in the 1930s, more recent crises) mapped onto the template",
          ],
          structure:
            "A theoretical template up front, followed by detailed historical case studies that apply it — dense and analytical, written more like an institutional research report than a trade book.",
        },
        {
          title: "Globalizing Capital",
          author: "Barry Eichengreen",
          cover: "https://covers.openlibrary.org/b/id/439404-M.jpg",
          tagline: "A rigorous academic history of the international monetary system, from the gold standard to today.",
          summary:
            "A more academic companion to Eichengreen's other work, tracing the international monetary system's evolution from the classical gold standard through Bretton Woods to today's managed float — with real attention to the economic theory behind each regime's rise and fall.",
          learn: [
            "The economic logic (and eventual breakdown) of the gold standard, Bretton Woods, and floating exchange rate regimes in turn",
            "Why the 'trilemma' — you can't simultaneously have free capital flows, fixed exchange rates, and independent monetary policy — recurs across every era",
            "The political economy pressures that have historically forced a shift from one monetary regime to the next",
          ],
          structure:
            "A chronological academic history organized by monetary regime, each section pairing historical narrative with the underlying economic theory.",
        },
        {
          title: "The Death of Money",
          author: "James Rickards",
          cover: "https://covers.openlibrary.org/b/id/7316024-M.jpg",
          tagline: "A deeper, more technical look at systemic risk to the dollar-based international monetary system.",
          summary:
            "Rickards's follow-up to Currency Wars goes further into systemic risk within the current dollar-centered monetary system, covering central bank balance sheets, the plumbing of the international payments system, and scenarios for how confidence in the dollar could erode.",
          learn: [
            "How the international payments and reserve system actually functions at a technical, plumbing level",
            "Specific systemic risk scenarios tied to central bank balance sheet expansion and sovereign debt levels",
            "A framework for thinking about tail risk to a reserve currency's status, whether or not you find the specific scenarios persuasive",
          ],
          structure:
            "Builds from the mechanics of the current monetary system to a series of specific risk scenarios and their potential market implications.",
        },
      ],
    },
  },

  {
    id: "personal-finance-wealth",
    name: "Personal Finance & Wealth Management",
    subtitle:
      "Wealth preservation, tax strategies, retirement planning, and private client advising.",
    levels: {
      Beginner: [
        {
          title: "The Simple Path to Wealth",
          author: "JL Collins",
          cover: "https://covers.openlibrary.org/b/id/10448941-M.jpg",
          tagline: "A straightforward, low-cost index-investing approach to building long-term wealth.",
          summary:
            "Originally written as letters to Collins's daughter, this lays out a deliberately simple approach to personal finance — save aggressively, invest in low-cost index funds, avoid debt — aimed at people who don't want investing to be a hobby.",
          learn: [
            "A simple, low-maintenance index-fund-based investing approach for a full working career and into retirement",
            "The mathematics of the 4% withdrawal rule and how to think about retirement number planning",
            "Why simplicity and low costs tend to beat complexity for the vast majority of individual investors",
          ],
          structure:
            "Written as a series of standalone letters/chapters, each addressing one specific personal finance topic (debt, index funds, asset allocation, withdrawal strategy).",
        },
        {
          title: "I Will Teach You to Be Rich",
          author: "Ramit Sethi",
          cover: "https://covers.openlibrary.org/b/id/6305971-M.jpg",
          tagline: "A practical, systems-based approach to budgeting, saving, and investing for young adults.",
          summary:
            "A step-by-step, opinionated system for automating personal finances — bank accounts, credit cards, budgeting, and basic investing — aimed specifically at people early in their careers who want a concrete plan rather than general advice.",
          learn: [
            "A concrete system for automating savings and investing so good behavior doesn't depend on willpower",
            "How to evaluate and negotiate the everyday financial decisions (credit cards, bank fees, salary) most personal finance books skip",
            "A simple framework for 'conscious spending' — cutting costs aggressively on what you don't care about to spend freely on what you do",
          ],
          structure:
            "A structured, week-by-week program (set up accounts, automate savings, start investing) rather than a topic-by-topic reference.",
        },
        {
          title: "The Millionaire Next Door",
          author: "Thomas J. Stanley & William D. Danko",
          cover: "https://covers.openlibrary.org/b/id/797467-M.jpg",
          tagline: "A data-driven study of who actually accumulates wealth in America, and how.",
          summary:
            "Based on original research surveying actual millionaires, Stanley and Danko find that most wealth in America is built quietly through frugality and consistent saving, not high income or visible spending — a useful corrective to assumptions about what wealth looks like.",
          learn: [
            "The specific, research-backed behavioral patterns (frugality, business ownership) most correlated with actual wealth accumulation",
            "Why high income and high visible spending are weak predictors of net worth, based on real survey data",
            "How to think about wealth as accumulated net worth rather than as current lifestyle or income",
          ],
          structure:
            "Organized around the study's key findings, each chapter presenting survey data on one dimension of how actual millionaires actually live and spend.",
        },
      ],
      Intermediate: [
        {
          title: "The Bogleheads' Guide to Investing",
          author: "Taylor Larimore, Mel Lindauer & Michael LeBoeuf",
          cover: "https://covers.openlibrary.org/b/id/306608-M.jpg",
          tagline: "A comprehensive, community-driven guide to low-cost investing and tax-advantaged accounts.",
          summary:
            "Written by longtime members of the Bogleheads community (built around John Bogle's investing philosophy), this covers not just index investing but the full practical picture — account types, tax efficiency, insurance, and estate basics — for a complete personal financial plan.",
          learn: [
            "How to prioritize and structure tax-advantaged accounts (401(k), IRA, HSA) for maximum long-run benefit",
            "Practical tax-efficient fund placement — which asset types belong in taxable versus tax-advantaged accounts",
            "A complete framework connecting investing decisions to insurance, estate basics, and overall financial planning",
          ],
          structure:
            "Organized as a comprehensive reference across the full personal finance picture — saving, investing, taxes, insurance, and estate basics — not just portfolio construction.",
        },
        {
          title: "Die With Zero",
          author: "Bill Perkins",
          cover: "https://covers.openlibrary.org/b/id/10433791-M.jpg",
          tagline: "A provocative argument for optimizing the timing of spending, not just the size of your portfolio.",
          summary:
            "Perkins argues that most people over-save for a retirement they may not fully enjoy, and makes a rigorous case for deliberately timing spending — including gifts to children — to maximize actual life experience rather than end-of-life net worth.",
          learn: [
            "A framework for thinking about the declining utility of money at different life stages, not just accumulating it",
            "Why front-loading some 'net worth' as living gifts to children can be more valuable than a larger inheritance",
            "Practical tools for estimating how much is actually 'enough' for retirement, rather than defaulting to 'more'",
          ],
          structure:
            "Builds its central argument (optimize experiences, not net worth) through a series of thought experiments and rules of thumb, aimed at a general but financially literate reader.",
        },
        {
          title: "Your Money or Your Life",
          author: "Vicki Robin & Joe Dominguez",
          cover: "https://covers.openlibrary.org/b/id/13313358-M.jpg",
          tagline: "A values-based framework for rethinking the relationship between money, time, and life energy.",
          summary:
            "A foundational text of the financial independence movement, reframing every purchase in terms of the hours of life energy it actually costs, and providing a concrete nine-step program for tracking spending and building toward financial independence.",
          learn: [
            "The 'real hourly wage' concept — translating spending into hours of your actual working life, not just dollars",
            "A concrete, step-by-step system for tracking all income and expenses to find your true cost of living",
            "How to define 'enough' deliberately, rather than by default, as the basis for a savings and investment plan",
          ],
          structure:
            "A structured nine-step program, each chapter building on the previous step toward a complete financial independence plan.",
        },
      ],
      Advanced: [
        {
          title: "The Value of Debt",
          author: "Thomas J. Anderson",
          tagline: "A sophisticated case for strategic leverage in wealth management, aimed at higher-net-worth planning.",
          summary:
            "Anderson challenges the conventional 'pay off all debt' advice for higher-net-worth individuals, arguing for a deliberate, strategic use of leverage — matched against liquid assets and cash flow — as a wealth management tool rather than something to eliminate outright.",
          learn: [
            "A framework for distinguishing productive, strategic debt from consumer debt, specific to higher-net-worth balance sheets",
            "How to think about liquidity and leverage together, rather than treating debt reduction as an unconditional goal",
            "The tax and flexibility tradeoffs of maintaining strategic leverage against a diversified investment portfolio",
          ],
          structure:
            "Builds a case against the 'debt is always bad' default, then lays out specific frameworks and scenarios for using leverage deliberately.",
        },
        {
          title: "Family Wealth",
          author: "James E. Hughes Jr.",
          cover: "https://covers.openlibrary.org/b/id/830431-M.jpg",
          tagline: "A foundational text on preserving wealth — and family cohesion — across multiple generations.",
          summary:
            "Hughes, a longtime private wealth attorney, argues that most family wealth is lost by the third generation not from bad investing but from failing to develop the family's own human and intellectual capital alongside its financial capital.",
          learn: [
            "A framework distinguishing financial capital from human and intellectual capital within a family, and why all three matter for wealth to last",
            "Governance structures (family meetings, mission statements, family offices) used to manage multigenerational wealth",
            "Why most multigenerational wealth failures are behavioral and relational, not investment failures",
          ],
          structure:
            "Organized around the different forms of family capital and the governance structures used to sustain each — written for practitioners in private wealth and family offices, not a general audience.",
        },
        {
          title: "Tools & Techniques of Estate Planning",
          author: "Stephan R. Leimberg et al.",
          cover: "https://covers.openlibrary.org/b/id/2672396-M.jpg",
          tagline: "A dense, technical practitioner reference on estate planning and tax strategy.",
          summary:
            "A long-running, comprehensive practitioner reference covering the technical mechanics of estate planning — wills, trusts, gifting strategies, and estate tax minimization — widely used in financial planning and CFP curricula.",
          learn: [
            "The technical structure and use cases for major trust types and gifting strategies in estate planning",
            "How estate and gift tax rules actually work, and the legitimate strategies used to plan around them",
            "A practitioner-level vocabulary and toolkit for private client and estate planning conversations",
          ],
          structure:
            "A technical reference organized by tool (specific trust types, gifting techniques, tax strategies) rather than a narrative — meant to be consulted topic by topic.",
        },
      ],
    },
  },
];
