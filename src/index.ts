 {
  "name": "lightfund-ecosystem",
  "version": "1.0.0",
  "description": "CFG Core Engine, Fleefund, and ROIBet Unified Infrastructure",
  "main": "src/index.ts",
  "scripts": {
    "start": "node dist/index.js",
    "dev": "ts-node src/index.ts"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1"
  },
  "devDependencies": {
    "typescript": "^5.0.4",
    "ts-node": "^10.9.1"
  }
}
[8:21 AM, 11/3/2026] Don Mauzo: import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

// ==========================================
// 1. CFG TREASURY & RESERVE ENGINE
// ==========================================
interface CFGTreasury {
    totalBalanceUSD: number;
    reserveFundUSD: number; // 15% Safety Net
    houseCutProfitTZS: number; // 30% Guaranteed Revenue
}

let CFG_CORE: CFGTreasury = {
    totalBalanceUSD: 1000000.00,
    reserveFundUSD: 150000.00,
    houseCutProfitTZS: 0
};

// ==========================================
// 2. FLEEFUND: 25% CASHBACK & INVESTMENT API
// ==========================================
app.post('/api/v1/fleefund/invest', (req: Request, res: Response) => {
    const { userId, amountTZS, tierPackage } = req.body;
    
    // 15% automatic allocation to CFG Safety Reserve
    const reserveCut = amountTZS * 0.15;
    CFG_CORE.reserveFundUSD += (reserveCut * 0.00038); // Standard TZS to USD conversion

    res.status(201).json({
        success: true,
        message: Uwekezaji wa TZS ${amountTZS} umefanikiwa kwenye kifurushi cha ${tierPackage}.,
        vaultActive: true,
        dailyRoiRate: "0.5% - 2.0% Daily ROI Ticker Active"
    });
});

// ==========================================
// 3. ROIBET: FAST-ROUND STAKING & CASHBACK
// ==========================================
app.post('/api/v1/roibet/resolve-round', (req: Request, res: Response) => {
    const { roundId, stakes } = req.body; // stakes array: [{userId, stakeAmount}]

    const totalPot = stakes.reduce((sum: number, s: any) => sum + s.stakeAmount, 0);
    
    // Profit & Allocation Splitting
    const houseCut = totalPot * 0.30;       // 30% House Profit (Guaranteed)
    const prizePool = totalPot * 0.45;      // 45% Prize Allocation for Multipliers
    const cashbackVault = totalPot * 0.25;  // 25% Auto-Injected into Fleefund Vault

    CFG_CORE.houseCutProfitTZS += houseCut;

    // Odds Mechanics (3x to 31x)
    const multipliers = [3, 5, 7, 9, 11, 15, 27, 31];
    const winningMultiplier = multipliers[Math.floor(Math.random() * multipliers.length)];

    res.status(200).json({
        success: true,
        roundId: roundId || ROIBET-${Date.now()},
        totalPotTZS: totalPot,
        houseRevenueTZS: houseCut,
        prizePoolTZS: prizePool,
        cashbackSecuredTZS: cashbackVault,
        winningMultiplier: ${winningMultiplier}x,
        note: "25% Cashback Shield imewasilishwa Fleefund na inazalishwa kwa sekunde!"
    });
});

app.listen(PORT, () => {
    console.log(🚀 LightFund Group & CFG Core Engine active on Port ${PORT});
});
