"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[140],{6468:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=o(7624),s=o(2172);const i={title:"Staking",sidebar_position:5,description:"Staking sub-protocols.",keywords:["execution","decex","staking","deposit","withdraw","unlock"],last_update:{date:"09/25/2024",author:"Dariia Porechna"}},r=void 0,a={id:"decex/staking",title:"Staking",description:"Staking sub-protocols.",source:"@site/docs/decex/staking.md",sourceDirName:"decex",slug:"/decex/staking",permalink:"/docs/decex/staking",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Staking",sidebar_position:5,description:"Staking sub-protocols.",keywords:["execution","decex","staking","deposit","withdraw","unlock"],last_update:{date:"09/25/2024",author:"Dariia Porechna"}},sidebar:"tutorialSidebar",previous:{title:"Workflow",permalink:"/docs/decex/workflow"},next:{title:"Fraud Proofs",permalink:"/docs/decex/fraud_proofs"}},d={},c=[{value:"Operator Registration",id:"operator-registration",level:2},{value:"Operator Config",id:"operator-config",level:3},{value:"Steps",id:"steps",level:3},{value:"Nominator Registration",id:"nominator-registration",level:2},{value:"Stake Withdrawals",id:"stake-withdrawals",level:2},{value:"Unlock withdrawn funds",id:"unlock-withdrawn-funds",level:3},{value:"Stake Deposits",id:"stake-deposits",level:2},{value:"Operator Deregistration",id:"operator-deregistration",level:2},{value:"Slashing Stake",id:"slashing-stake",level:2},{value:"Fees Distribution",id:"fees-distribution",level:2}];function h(e){const t={a:"a",annotation:"annotation",code:"code",h2:"h2",h3:"h3",li:"li",math:"math",mn:"mn",mrow:"mrow",msup:"msup",ol:"ol",p:"p",semantics:"semantics",span:"span",ul:"ul",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["While the below scheme is different from traditional checkpointed or snapshotted staking protocols, it has the benefit being more efficient while consuming far less state. Specifically the state is constant in the number of operators and nominators. Most of the time, we only adjust the ",(0,n.jsx)(t.code,{children:"current_epoch_fees"})," for an operator pool every time fees from confirmed blocks are collected (which is frequent)."]}),"\n",(0,n.jsx)(t.p,{children:"Individual nominator shares for a given pool are independent of other nominators shares. Nominators shares only have to be updated when a deposit or withdrawal is made, which are relatively infrequent (compared to bundle production)."}),"\n",(0,n.jsx)(t.h2,{id:"operator-registration",children:"Operator Registration"}),"\n",(0,n.jsxs)(t.p,{children:["Any user who has the ",(0,n.jsx)(t.code,{children:"MinOperatorStake"})," and sufficient hardware for running an operator node may choose to register as an operator by calling the ",(0,n.jsx)(t.code,{children:"register_operator"})," extrinsic on a specific domain."]}),"\n",(0,n.jsx)(t.h3,{id:"operator-config",children:"Operator Config"}),"\n",(0,n.jsx)(t.p,{children:"The settings for nominators, which include:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"nomination_tax"}),": the tax rate for compute fees earned by the pool (e.g. 5%)."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"minimum_nominator_stake"}),": the minimum stake needed to participate as a nominator for this pool. Should be > 1 SSC."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"steps",children:"Steps"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["The operator must provide an ",(0,n.jsx)(t.code,{children:"operator_config"})," and the following fields:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"domain_id"})," of the target domain they wish to stake on"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"signing_key"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["This immediately creates a new entry in the ",(0,n.jsx)(t.code,{children:"Operators"})," registry, which creates a new staking pool for nominators to join. The pool is divided into shares on pro-rata basis, proportional to each nominators amount in the ",(0,n.jsx)(t.code,{children:"current_total_stake"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["The deposit is applied to the ",(0,n.jsx)(t.code,{children:"Deposits"})," storage for this operator as a pending deposit. The ",(0,n.jsx)(t.code,{children:"operator_id"})," is also added to the ",(0,n.jsx)(t.code,{children:"next_operators"})," set in the ",(0,n.jsx)(t.code,{children:"DomainRegistry"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["A 20% of the deposit is transferred to a ",(0,n.jsx)(t.code,{children:"storage_fund_account"})," towards paying storage fees for bundles. The rest of the deposit amount remains locked in operator\u2019s balance account."]}),"\n",(0,n.jsxs)(t.li,{children:["At the next epoch transition for this domain, the ",(0,n.jsx)(t.code,{children:"current_total_stake"})," for this domain is updated to reflect the operator\u2019s deposit (minus the storage fund %). The ",(0,n.jsx)(t.code,{children:"operator_id"})," is moved to the ",(0,n.jsx)(t.code,{children:"current_operators"})," for this domain."]}),"\n",(0,n.jsxs)(t.li,{children:["The operator will get shares equal to their deposit (the ",(0,n.jsx)(t.code,{children:"share_price"})," at the pool start is equal to ",(0,n.jsx)(t.code,{children:"1"}),"). The ",(0,n.jsx)(t.code,{children:"total_shares"})," and ",(0,n.jsx)(t.code,{children:"current_total_stake"})," are set to the staked value. Their initial pending deposit is moved to ",(0,n.jsx)(t.code,{children:"KnownDeposit"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"The operator may now participate in the VRF bundle election."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"nominator-registration",children:"Nominator Registration"}),"\n",(0,n.jsxs)(t.p,{children:["Any user who has ",(0,n.jsx)(t.code,{children:"MinNominatorStake"})," may choose to join this operator\u2019s pool by calling the ",(0,n.jsx)(t.code,{children:"nominate_operator"})," ",(0,n.jsx)(t.a,{href:"/docs/decex/interfaces#nominate_operator",children:"extrinsic"})," with the ",(0,n.jsx)(t.code,{children:"deposit_amount"})," of SSC they wish to stake."]}),"\n",(0,n.jsxs)(t.p,{children:["Note: the actual calculations are done in Shannons, and 1 SSC = ",(0,n.jsxs)(t.span,{className:"katex",children:[(0,n.jsx)(t.span,{className:"katex-mathml",children:(0,n.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(t.semantics,{children:[(0,n.jsxs)(t.mrow,{children:[(0,n.jsx)(t.mn,{children:"1"}),(0,n.jsxs)(t.msup,{children:[(0,n.jsx)(t.mn,{children:"0"}),(0,n.jsx)(t.mn,{children:"18"})]})]}),(0,n.jsx)(t.annotation,{encoding:"application/x-tex",children:"10^{18}"})]})})}),(0,n.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(t.span,{className:"base",children:[(0,n.jsx)(t.span,{className:"strut",style:{height:"0.8141em"}}),(0,n.jsx)(t.span,{className:"mord",children:"1"}),(0,n.jsxs)(t.span,{className:"mord",children:[(0,n.jsx)(t.span,{className:"mord",children:"0"}),(0,n.jsx)(t.span,{className:"msupsub",children:(0,n.jsx)(t.span,{className:"vlist-t",children:(0,n.jsx)(t.span,{className:"vlist-r",children:(0,n.jsx)(t.span,{className:"vlist",style:{height:"0.8141em"},children:(0,n.jsxs)(t.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(t.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(t.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(t.span,{className:"mord mtight",children:(0,n.jsx)(t.span,{className:"mord mtight",children:"18"})})})]})})})})})]})]})})]})," Shannons"]}),"\n",(0,n.jsx)(t.p,{children:"First nomination:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["The deposit of ",(0,n.jsx)(t.code,{children:"deposit_amount"})," SSC is added to the ",(0,n.jsx)(t.code,{children:"Deposits"})," storage as a ",(0,n.jsx)(t.code,{children:"PendingDeposit"})," for the operator pool they chose."]}),"\n",(0,n.jsxs)(t.li,{children:["A 20% of the deposit is transferred to a ",(0,n.jsx)(t.code,{children:"storage_fund_account"})," towards paying storage fees for bundles. The rest of the deposit amount remains locked in operator\u2019s balance account."]}),"\n",(0,n.jsxs)(t.li,{children:["Deposit ",(0,n.jsx)(t.code,{children:"deposit_amount"}),"(minus the 20% for storage fund) is locked for ",(0,n.jsx)(t.code,{children:"nominator_id"})," account in ",(0,n.jsx)(t.code,{children:"pallet_balances"})," and ",(0,n.jsx)(t.code,{children:"operator_id"}),"\u2019s ",(0,n.jsx)(t.code,{children:"deposits_in_epoch"})," is incremented by the same amount."]}),"\n",(0,n.jsxs)(t.li,{children:["During the next epoch transition, the ",(0,n.jsx)(t.code,{children:"deposit_amount"})," is added to ",(0,n.jsx)(t.code,{children:"current_total_stake"})," of the operator pool and domain\u2019s ",(0,n.jsx)(t.code,{children:"current_total_stake"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Note that nominator shares are not yet \u201cassigned\u201d until they either add a new deposit in a subsequent epoch or initiate a withdrawal."}),"\n",(0,n.jsxs)(t.p,{children:["For subsequent nomination deposits see ",(0,n.jsx)(t.a,{href:"#stake-deposits",children:"Stake Deposits"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"stake-withdrawals",children:"Stake Withdrawals"}),"\n",(0,n.jsxs)(t.p,{children:["Any registered operator or nominator may initiate a withdrawal of their stake from the pool by submitting a ",(0,n.jsx)(t.code,{children:"withdraw_stake"})," ",(0,n.jsx)(t.a,{href:"/docs/decex/interfaces#withdraw_stake",children:"extrinsic"})," which support different types of withdrawal:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"All, withdraw all the stake"}),"\n",(0,n.jsx)(t.li,{children:"Percent, withdraw a given percentage of the stake"}),"\n",(0,n.jsx)(t.li,{children:"Stake, withdraw a given amount of stake (i.e. balance)\nThe stake is calculated by the share price at this instant, it may not be accurate and may withdraw a bit more stake if there is reward happen later in this epoch"}),"\n",(0,n.jsx)(t.li,{children:"Share, withdraw a given amount of share"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["If the nominator's stake after withdrawal results in an amount below the operator's required ",(0,n.jsx)(t.code,{children:"minimum_nominator_stake,"})," the nominator is automatically completely unstaked. Contrary, the operator cannot withdraw below the ",(0,n.jsx)(t.code,{children:"MinOperatorStake"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["A withdrawal is logically composed of 2 parts. First, a user request to withdraw shares (",(0,n.jsx)(t.code,{children:"withdraw_stake"}),") that unstakes a given amount of stake at the end of epoch, and second, a request to unlock (",(0,n.jsx)(t.code,{children:"unlock_funds"})," ",(0,n.jsx)(t.a,{href:"/docs/decex/interfaces#unlock_funds",children:"extrinsic"}),") and actually transfer to the balance account the amount of SSC for those shares after the locking period has passed."]}),"\n",(0,n.jsxs)(t.p,{children:["A nominator can submit any number of ",(0,n.jsx)(t.code,{children:"withdraw_stake"})," extrinsics. Withdrawals in the same epoch are aggregated and transferrable with the same ",(0,n.jsx)(t.code,{children:"unlock_funds"})," extrinsic. However, for withdrawals in different epochs, separate ",(0,n.jsx)(t.code,{children:"unlock_funds"})," extrinsics will have to be submitted, but they can be batched together if multiple have cleared the unlocking period."]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Nominator submits a ",(0,n.jsx)(t.code,{children:"withdraw_stake"})," extrinsic."]}),"\n",(0,n.jsxs)(t.li,{children:["If there are any pending deposits ",(0,n.jsx)(t.code,{children:"PendingDeposit"})," for this nominator for any previous epoch ",(0,n.jsx)(t.code,{children:"n"}),", then use the ",(0,n.jsx)(t.code,{children:"OperatorEpochSharePrice"})," stored for those specific deposit epoch ",(0,n.jsx)(t.code,{children:"n"})," and calculate the ",(0,n.jsx)(t.code,{children:"shares"})," and add it to existing ",(0,n.jsx)(t.code,{children:"shares"})," in ",(0,n.jsx)(t.code,{children:"KnownDeposit"}),".This would not be unbounded and at max be 1 ",(0,n.jsx)(t.code,{children:"PendingDeposit"})," for a given nominator."]}),"\n",(0,n.jsxs)(t.li,{children:["If there are any withdrawals ",(0,n.jsx)(t.code,{children:"withdrawals_in_shares"})," for this nominator for any previous epoch ",(0,n.jsx)(t.code,{children:"n"}),", then use the ",(0,n.jsx)(t.code,{children:"OperatorEpochSharePrice"})," stored for those specific epoch ",(0,n.jsx)(t.code,{children:"n"})," and convert the ",(0,n.jsx)(t.code,{children:"shares"})," to SSC, move the withdrawal into the converted ",(0,n.jsx)(t.code,{children:"withdrawals"})," vector and add the amount to ",(0,n.jsx)(t.code,{children:"total_withdrawal_amount"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Once the pending nominator deposit shares are calculated and added to known shares,","\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["If there are no withdrawals initiated this epoch yet, a ",(0,n.jsx)(t.code,{children:"Withdrawal"})," item is created with","\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"allowed_since_domain_epoch"})," set to current epoch,"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"unlock_at_confirmed_domain_block_number = LatestConfirmedDomainBlockNumber(domain_id) + StakeWithdrawalLockingPeriod"}),","]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"withdraw_shares"})," requested,"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"storage_fee_refund = withdraw_shares/total_shares*storage_fee_deposit/total_storage_fee_deposit*storage_fund_account_balance"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["If there is already a withdrawal for the same ",(0,n.jsx)(t.code,{children:"allowed_since_domain_epoch"}),", ",(0,n.jsx)(t.code,{children:"Withdrawal"})," storage is incremented with intended #",(0,n.jsx)(t.code,{children:"withdraw_shares"})," and ",(0,n.jsx)(t.code,{children:"storage_fee_refund"})," to withdraw, and ",(0,n.jsx)(t.code,{children:"unlock_at_confirmed_domain_block_number"})," is updated to a higher value ",(0,n.jsx)(t.code,{children:"LatestConfirmedDomainBlockNumber(domain_id) + StakeWithdrawalLockingPeriod"}),". All the withdrawals submitted in the same epoch are unlocked at the unlocking time of the last withdrawal of that epoch."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Nominator"})," shares and storage fee deposit in their known deposits ",(0,n.jsx)(t.code,{children:"KnownDeposit"})," are reduced:","\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"shares = shares - withdraw_shares"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"storage_fee_deposit = storage_fee_deposit(1 - withdraw_shares/shares)"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"operator_id"})," \u2018s ",(0,n.jsx)(t.code,{children:"withdrawals_in_epoch"})," are incremented with total of ",(0,n.jsx)(t.code,{children:"withdraw_shares"})," from all nominators withdraw requests for the next epoch.\nThe total of all nominator storage fee deposits (",(0,n.jsx)(t.code,{children:"total_storage_fee_deposit"}),") is decremented by ",(0,n.jsx)(t.code,{children:"storage_fee_refund"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"storage_fee_refund"})," amount is locked in the operator\u2019s ",(0,n.jsx)(t.code,{children:"storage_fund_account"})," and not used to pay for any future bundles."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"unlock-withdrawn-funds",children:"Unlock withdrawn funds"}),"\n",(0,n.jsxs)(t.p,{children:["Once the previous epoch (of ",(0,n.jsx)(t.code,{children:"withdraw_shares"})," extrinsic) is completed and share price for that epoch is noted, nominators can withdraw the amount per requested shares after the unlocking period is completed."]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Nominator submits ",(0,n.jsx)(t.code,{children:"unlock_funds(operator_id, nominator_id)"})]}),"\n",(0,n.jsxs)(t.li,{children:["Operator picks the ",(0,n.jsx)(t.code,{children:"nominator_id"}),"\u2019s first (oldest) withdrawal from the list. If the ",(0,n.jsx)(t.code,{children:"StakeWithdrawalLockingPeriod"})," period is not complete (the ",(0,n.jsx)(t.code,{children:"unlock_at_confirmed_domain_block_number"})," is higher than ",(0,n.jsx)(t.code,{children:"LatestConfirmedDomainBlockNumber(domain_id)"}),"), then error out."]}),"\n",(0,n.jsxs)(t.li,{children:["Calculate ",(0,n.jsx)(t.code,{children:"amount_to_unlock"})," as SSC amount for withdrawn shares using share value for epoch stored at ",(0,n.jsx)(t.code,{children:"OperatorEpochSharePrice"})," the withdraw is allowed from."]}),"\n",(0,n.jsxs)(t.li,{children:["Retain ",(0,n.jsx)(t.code,{children:"storage_fee_refund"})," as it was."]}),"\n",(0,n.jsxs)(t.li,{children:["Deduct ",(0,n.jsx)(t.code,{children:"amount_to_unlock"})," from ",(0,n.jsx)(t.code,{children:"total_withdrawal_amount."})]}),"\n",(0,n.jsxs)(t.li,{children:["If ",(0,n.jsx)(t.code,{children:"amount_to_unlock"})," is more than SSC amount that was locked for staking on this operator, the excess is minted and locked to nominator account."]}),"\n",(0,n.jsxs)(t.li,{children:["Finally, ",(0,n.jsx)(t.code,{children:"amount_to_unlock"})," of SSC is released from locked to transferrable state for nominator account."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"stake-deposits",children:"Stake Deposits"}),"\n",(0,n.jsxs)(t.p,{children:["Existing nominators may choose to add more stake to the same operator\u2019s pool they are already nominating using the same ",(0,n.jsx)(t.code,{children:"nominate_operator"})," ",(0,n.jsx)(t.a,{href:"/docs/decex/interfaces#nominate_operator",children:"extrinsic"})," with the ",(0,n.jsx)(t.code,{children:"deposit_amount"})," of SSC they wish to stake."]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Nominator with balance account ",(0,n.jsx)(t.code,{children:"nominator_id"})," submits an extrinsic to deposit for next epoch for a given ",(0,n.jsx)(t.code,{children:"OperatorPool"})," as ",(0,n.jsx)(t.code,{children:"nominate_operator(OperatorPoolId, nominator_id, deposit_amount)"})]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"deposit_amount"})," is locked for  ",(0,n.jsx)(t.code,{children:"nominator_id"})," account in ",(0,n.jsx)(t.code,{children:"pallet_balances"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["The deposit is added as ",(0,n.jsx)(t.code,{children:"PendingDeposit"})," to ",(0,n.jsx)(t.code,{children:"Deposits"})," storage for this nominator-operator pair as a key."]}),"\n",(0,n.jsxs)(t.li,{children:["If there is a pending deposit for this nominator submitted this epoch, the existing pending deposit is incremented with ",(0,n.jsx)(t.code,{children:"deposit_amount"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["If there are any pending deposits for this nominator for any previous epoch ",(0,n.jsx)(t.code,{children:"n"}),", then use the ",(0,n.jsx)(t.code,{children:"OperatorEpochSharePrice"})," stored for those specific deposit epoch ",(0,n.jsx)(t.code,{children:"n"})," and calculate the ",(0,n.jsx)(t.code,{children:"shares"})," and add it to existing ",(0,n.jsx)(t.code,{children:"shares"})," in ",(0,n.jsx)(t.code,{children:"KnownDeposit"}),".This would not be unbounded and at max be 1 ",(0,n.jsx)(t.code,{children:"PendingDeposit"})," for a given nominator."]}),"\n",(0,n.jsxs)(t.li,{children:["A 20% of the deposit is transferred to a ",(0,n.jsx)(t.code,{children:"storage_fund_account"})," towards paying storage fees for bundles. The rest of the deposit amount remains locked in nominator\u2019s balance account."]}),"\n",(0,n.jsx)(t.li,{children:"The amount transferred is applied to domain\u2019s balance."}),"\n",(0,n.jsxs)(t.li,{children:["The deposit of ",(0,n.jsx)(t.code,{children:"deposit_amount"}),"(minus the storage fund %) SSC is applied to the ",(0,n.jsx)(t.code,{children:"deposits_in_epoch"})," table within the operator pool."]}),"\n",(0,n.jsxs)(t.li,{children:["During the next epoch transition,","\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Compute the operator\u2019s pool end-of-epoch ",(0,n.jsx)(t.code,{children:"share_price"})," as the sum of all stake in the pool and rewards gained during the previous epoch divided by the total number of shares ",(0,n.jsx)(t.code,{children:"(current_total_stake + current_epoch_rewards * (1-nomination_tax)) / total_shares"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Assign the ",(0,n.jsx)(t.code,{children:"shares"})," to this nominator based on the ",(0,n.jsx)(t.code,{children:"share_price"})," of the pool (as ",(0,n.jsx)(t.code,{children:"shares = deposit_amount / share_price"}),")."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"deposit_amount"})," is added to ",(0,n.jsx)(t.code,{children:"current_total_stake"})," of the operator pool and domain\u2019s ",(0,n.jsx)(t.code,{children:"current_total_stake"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"shares"})," of this nominator are added to ",(0,n.jsx)(t.code,{children:"total_shares"})," of the pool."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"operator-deregistration",children:"Operator Deregistration"}),"\n",(0,n.jsxs)(t.p,{children:["See the corresponding ",(0,n.jsx)(t.code,{children:"deregister_operator"})," ",(0,n.jsx)(t.a,{href:"/docs/decex/interfaces#deregister_operator",children:"extrinsic"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"slashing-stake",children:"Slashing Stake"}),"\n",(0,n.jsxs)(t.p,{children:["If any ",(0,n.jsx)(t.code,{children:"submit_fraud_proof"})," ",(0,n.jsx)(t.a,{href:"/docs/decex/interfaces#submit_fraud_proof",children:"extrinsic"})," is accepted by the chain, the operator\u2019s entire pool is slashed."]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["The pool is immediately frozen for withdrawals and deposits, by setting ",(0,n.jsx)(t.code,{children:"status"})," in ",(0,n.jsx)(t.code,{children:"Operators"})," registry entry of this operator to ",(0,n.jsx)(t.code,{children:"Slashed"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"All new deposits are canceled and returned to senders."}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"Withdrawals"})," table is checked to see if there are any withdrawals initiated for this operator, all of which are sent to the treasury account."]}),"\n",(0,n.jsxs)(t.li,{children:["The entire operator pool balance of ",(0,n.jsx)(t.code,{children:"current_total_stake"})," and any rewards received will be transferred to treasury account and operator is removed from the ",(0,n.jsx)(t.code,{children:"next_operators"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["At epoch transition, the entire pool balance is applied to the SSC treasury account, and the Operator is removed from the ",(0,n.jsx)(t.code,{children:"Operators"})," registry."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"fees-distribution",children:"Fees Distribution"}),"\n",(0,n.jsx)(t.p,{children:"For each confirmed domain block this domain, fees are distributed as follows:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The storage fees (",(0,n.jsx)(t.code,{children:"ER::block_fees.storage_fee"}),") for bundles in that block are refunded to the operators who authored those bundles according to how much they front-paid for bundle size."]}),"\n",(0,n.jsxs)(t.li,{children:["The execution fees (",(0,n.jsx)(t.code,{children:"ER::block_fees.execution_fee"}),") from the newly confirmed domain block are applied to the ",(0,n.jsx)(t.code,{children:"current_epoch_fees"})," for this domain in the ",(0,n.jsx)(t.code,{children:"DomainRegistry"})," and the operators pool (who submitted this ER) in the ",(0,n.jsx)(t.code,{children:"Operators"})," registry."]}),"\n",(0,n.jsxs)(t.li,{children:["Operator will get a cut of all fees collected by this pool as per ",(0,n.jsx)(t.code,{children:"nomination_tax"})," specified in operator\u2019s config at the epoch transition."]}),"\n",(0,n.jsxs)(t.li,{children:["Operator\u2019s cut will be automatically re-staked (via a deposit) to the operator\u2019s nomination at next epoch transition. Operator\u2019s ",(0,n.jsx)(t.code,{children:"shares"}),", ",(0,n.jsx)(t.code,{children:"total_shares"})," and ",(0,n.jsx)(t.code,{children:"current_total_stake"})," will be updated with the corresponding deposit."]}),"\n",(0,n.jsxs)(t.li,{children:["At the next epoch transition we check all domains and apply all changes corresponding to rewards, deposits and withdrawals to the ",(0,n.jsx)(t.code,{children:"current_total_stake"}),", and the iterating through all registered operators and updating their ",(0,n.jsx)(t.code,{children:"current_total_stake"})," as well. Note that this only changes the total pool balance, but does not affect ",(0,n.jsx)(t.code,{children:"total_shares"})," or ",(0,n.jsx)(t.code,{children:"shares"})," for any individual nominators."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Note: because of the challenge period, the fees distribution is delayed, and as a result, the set of nominators in the operator pool may have changed in the meantime. New operators who joined after the newly confirmed block was produced will get fees share from the blocks produced before they joined. Nominators who withdraw some shares will get lesser fee share. Nominators who withdraw completely, do not get fees for the last blocks still in challenge period, even though they were staking when those blocks were produced."})]})}function l(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},2172:(e,t,o)=>{o.d(t,{I:()=>a,M:()=>r});var n=o(1504);const s={},i=n.createContext(s);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);