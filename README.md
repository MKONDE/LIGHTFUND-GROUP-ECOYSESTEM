lightfund-ecosystem/
├── README.md                      # Nyaraka kuu ya mradi (Project Overview)
├── package.json                   # Maelezo ya Node.js dependencies
└── src/
    ├── cfg-core/                  # Injini Kuu ya Cashflow Gate
    │   ├── treasury.ts            # Usimamizi wa Salio na Reserve Fund (30% House Cut)
    │   └── payment-gateway.ts     # APIs za Miamala na Payouts
    ├── fleefund/                  # Mfumo wa Uwekezaji na 25% Cashback Vault
    │   └── investment-engine.ts   # Vifurushi (Kuza Start - Whale) na Live Ticker
    └── roibet/                    # Injini ya Kubeti kwa Witiri na Sekunde
        └── roibet-engine.ts       # Makapu, Odds (3x-31x), na Rollover Storms
