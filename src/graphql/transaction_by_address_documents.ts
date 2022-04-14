export const TokenAccountUnitDocument = /* GraphQL */`
query TxByAddress($address: _text, $endSlot: bigint, $startSlot: bigint, $limit: Int = 10, $offset: Int = 0) {
  instructions: instructions_by_address_aggregate(
    args: {addresses: $address, programs: "{}", end_slot: $endSlot, start_slot: $startSlot},
    limit: $limit,
    offset: $offset,
    order_by: {slot: desc, tx_signature: asc},
    distinct_on: tx_signature
  ) {
    nodes {
      transaction {
        signature
        slot
        success
      }
    }
  }
}
`;
