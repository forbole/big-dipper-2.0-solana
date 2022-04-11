export const TokenAccountUnitDocument = /* GraphQL */`
query TxByAddress($address: _text) {
  transactions: instructions_by_address_2_aggregate(args: {addresses: $address, programs: "{}", limit: 10, offset: 0, amount: 100000}, where: {}, distinct_on: tx_signature) {
    nodes {
      transaction {
        success
        slot
        signature
        numInstructions: num_instructions
        block {
          timestamp
        }
      }
    }
  }
}
`;
