import { getSubscriptionsByUser } from "../../db/repository/subscription.respositry"
import { getInvestmentTotals } from "../../db/repository/investment.repository"



export const dashboardService = async () => {
const investmentTotals = await getInvestmentTotals()
const subscriptionByUser = await getSubscriptionsByUser()
    const transactionStat = await getSubscriptionsByUser()
    
    return {
        investmentTotals,
        subscriptionByUser,
        transactionStat
    }

}