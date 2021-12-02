import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _text: any;
  bigint: any;
  jsonb: any;
  numeric: any;
  timestamp: any;
};


/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};


/** Boolean expression to compare columns of type "_text". All fields are combined with logical 'AND'. */
export type _Text_Comparison_Exp = {
  _eq?: Maybe<Scalars['_text']>;
  _gt?: Maybe<Scalars['_text']>;
  _gte?: Maybe<Scalars['_text']>;
  _in?: Maybe<Array<Scalars['_text']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['_text']>;
  _lte?: Maybe<Scalars['_text']>;
  _neq?: Maybe<Scalars['_text']>;
  _nin?: Maybe<Array<Scalars['_text']>>;
};

/** columns and relationships of "account_balance" */
export type Account_Balance = {
  __typename?: 'account_balance';
  address: Scalars['String'];
  balance: Scalars['bigint'];
};

/** aggregated selection of "account_balance" */
export type Account_Balance_Aggregate = {
  __typename?: 'account_balance_aggregate';
  aggregate?: Maybe<Account_Balance_Aggregate_Fields>;
  nodes: Array<Account_Balance>;
};

/** aggregate fields of "account_balance" */
export type Account_Balance_Aggregate_Fields = {
  __typename?: 'account_balance_aggregate_fields';
  avg?: Maybe<Account_Balance_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Account_Balance_Max_Fields>;
  min?: Maybe<Account_Balance_Min_Fields>;
  stddev?: Maybe<Account_Balance_Stddev_Fields>;
  stddev_pop?: Maybe<Account_Balance_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Account_Balance_Stddev_Samp_Fields>;
  sum?: Maybe<Account_Balance_Sum_Fields>;
  var_pop?: Maybe<Account_Balance_Var_Pop_Fields>;
  var_samp?: Maybe<Account_Balance_Var_Samp_Fields>;
  variance?: Maybe<Account_Balance_Variance_Fields>;
};


/** aggregate fields of "account_balance" */
export type Account_Balance_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Account_Balance_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Account_Balance_Avg_Fields = {
  __typename?: 'account_balance_avg_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "account_balance". All fields are combined with a logical 'AND'. */
export type Account_Balance_Bool_Exp = {
  _and?: Maybe<Array<Account_Balance_Bool_Exp>>;
  _not?: Maybe<Account_Balance_Bool_Exp>;
  _or?: Maybe<Array<Account_Balance_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  balance?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Account_Balance_Max_Fields = {
  __typename?: 'account_balance_max_fields';
  address?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Account_Balance_Min_Fields = {
  __typename?: 'account_balance_min_fields';
  address?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "account_balance". */
export type Account_Balance_Order_By = {
  address?: Maybe<Order_By>;
  balance?: Maybe<Order_By>;
};

/** select columns of table "account_balance" */
export enum Account_Balance_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Balance = 'balance'
}

/** aggregate stddev on columns */
export type Account_Balance_Stddev_Fields = {
  __typename?: 'account_balance_stddev_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Account_Balance_Stddev_Pop_Fields = {
  __typename?: 'account_balance_stddev_pop_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Account_Balance_Stddev_Samp_Fields = {
  __typename?: 'account_balance_stddev_samp_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Account_Balance_Sum_Fields = {
  __typename?: 'account_balance_sum_fields';
  balance?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Account_Balance_Var_Pop_Fields = {
  __typename?: 'account_balance_var_pop_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Account_Balance_Var_Samp_Fields = {
  __typename?: 'account_balance_var_samp_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Account_Balance_Variance_Fields = {
  __typename?: 'account_balance_variance_fields';
  balance?: Maybe<Scalars['Float']>;
};


/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "block" */
export type Block = {
  __typename?: 'block';
  hash: Scalars['String'];
  height: Scalars['bigint'];
  proposer?: Maybe<Scalars['String']>;
  slot: Scalars['bigint'];
  timestamp: Scalars['timestamp'];
  /** An array relationship */
  transactions: Array<Transaction>;
  /** An aggregate relationship */
  transactions_aggregate: Transaction_Aggregate;
};


/** columns and relationships of "block" */
export type BlockTransactionsArgs = {
  distinct_on?: Maybe<Array<Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Order_By>>;
  where?: Maybe<Transaction_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockTransactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Order_By>>;
  where?: Maybe<Transaction_Bool_Exp>;
};

/** aggregated selection of "block" */
export type Block_Aggregate = {
  __typename?: 'block_aggregate';
  aggregate?: Maybe<Block_Aggregate_Fields>;
  nodes: Array<Block>;
};

/** aggregate fields of "block" */
export type Block_Aggregate_Fields = {
  __typename?: 'block_aggregate_fields';
  avg?: Maybe<Block_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Block_Max_Fields>;
  min?: Maybe<Block_Min_Fields>;
  stddev?: Maybe<Block_Stddev_Fields>;
  stddev_pop?: Maybe<Block_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Block_Stddev_Samp_Fields>;
  sum?: Maybe<Block_Sum_Fields>;
  var_pop?: Maybe<Block_Var_Pop_Fields>;
  var_samp?: Maybe<Block_Var_Samp_Fields>;
  variance?: Maybe<Block_Variance_Fields>;
};


/** aggregate fields of "block" */
export type Block_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Block_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Block_Avg_Fields = {
  __typename?: 'block_avg_fields';
  height?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "block". All fields are combined with a logical 'AND'. */
export type Block_Bool_Exp = {
  _and?: Maybe<Array<Block_Bool_Exp>>;
  _not?: Maybe<Block_Bool_Exp>;
  _or?: Maybe<Array<Block_Bool_Exp>>;
  hash?: Maybe<String_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  proposer?: Maybe<String_Comparison_Exp>;
  slot?: Maybe<Bigint_Comparison_Exp>;
  timestamp?: Maybe<Timestamp_Comparison_Exp>;
  transactions?: Maybe<Transaction_Bool_Exp>;
};

/** aggregate max on columns */
export type Block_Max_Fields = {
  __typename?: 'block_max_fields';
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  proposer?: Maybe<Scalars['String']>;
  slot?: Maybe<Scalars['bigint']>;
  timestamp?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type Block_Min_Fields = {
  __typename?: 'block_min_fields';
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  proposer?: Maybe<Scalars['String']>;
  slot?: Maybe<Scalars['bigint']>;
  timestamp?: Maybe<Scalars['timestamp']>;
};

/** Ordering options when selecting data from "block". */
export type Block_Order_By = {
  hash?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  proposer?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  transactions_aggregate?: Maybe<Transaction_Aggregate_Order_By>;
};

/** select columns of table "block" */
export enum Block_Select_Column {
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  Proposer = 'proposer',
  /** column name */
  Slot = 'slot',
  /** column name */
  Timestamp = 'timestamp'
}

/** aggregate stddev on columns */
export type Block_Stddev_Fields = {
  __typename?: 'block_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Block_Stddev_Pop_Fields = {
  __typename?: 'block_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Block_Stddev_Samp_Fields = {
  __typename?: 'block_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Block_Sum_Fields = {
  __typename?: 'block_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  slot?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Block_Var_Pop_Fields = {
  __typename?: 'block_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Block_Var_Samp_Fields = {
  __typename?: 'block_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Block_Variance_Fields = {
  __typename?: 'block_variance_fields';
  height?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};


/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "message" */
export type Message = {
  __typename?: 'message';
  index: Scalars['Int'];
  inner_index: Scalars['Int'];
  involved_accounts: Scalars['_text'];
  program: Scalars['String'];
  /** An object relationship */
  transaction: Transaction;
  transaction_hash: Scalars['String'];
  type: Scalars['String'];
  value: Scalars['jsonb'];
};


/** columns and relationships of "message" */
export type MessageValueArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "message" */
export type Message_Aggregate = {
  __typename?: 'message_aggregate';
  aggregate?: Maybe<Message_Aggregate_Fields>;
  nodes: Array<Message>;
};

/** aggregate fields of "message" */
export type Message_Aggregate_Fields = {
  __typename?: 'message_aggregate_fields';
  avg?: Maybe<Message_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Message_Max_Fields>;
  min?: Maybe<Message_Min_Fields>;
  stddev?: Maybe<Message_Stddev_Fields>;
  stddev_pop?: Maybe<Message_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Message_Stddev_Samp_Fields>;
  sum?: Maybe<Message_Sum_Fields>;
  var_pop?: Maybe<Message_Var_Pop_Fields>;
  var_samp?: Maybe<Message_Var_Samp_Fields>;
  variance?: Maybe<Message_Variance_Fields>;
};


/** aggregate fields of "message" */
export type Message_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Message_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "message" */
export type Message_Aggregate_Order_By = {
  avg?: Maybe<Message_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Message_Max_Order_By>;
  min?: Maybe<Message_Min_Order_By>;
  stddev?: Maybe<Message_Stddev_Order_By>;
  stddev_pop?: Maybe<Message_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Message_Stddev_Samp_Order_By>;
  sum?: Maybe<Message_Sum_Order_By>;
  var_pop?: Maybe<Message_Var_Pop_Order_By>;
  var_samp?: Maybe<Message_Var_Samp_Order_By>;
  variance?: Maybe<Message_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Message_Avg_Fields = {
  __typename?: 'message_avg_fields';
  index?: Maybe<Scalars['Float']>;
  inner_index?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "message" */
export type Message_Avg_Order_By = {
  index?: Maybe<Order_By>;
  inner_index?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "message". All fields are combined with a logical 'AND'. */
export type Message_Bool_Exp = {
  _and?: Maybe<Array<Message_Bool_Exp>>;
  _not?: Maybe<Message_Bool_Exp>;
  _or?: Maybe<Array<Message_Bool_Exp>>;
  index?: Maybe<Int_Comparison_Exp>;
  inner_index?: Maybe<Int_Comparison_Exp>;
  involved_accounts?: Maybe<_Text_Comparison_Exp>;
  program?: Maybe<String_Comparison_Exp>;
  transaction?: Maybe<Transaction_Bool_Exp>;
  transaction_hash?: Maybe<String_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  value?: Maybe<Jsonb_Comparison_Exp>;
};

/** aggregate max on columns */
export type Message_Max_Fields = {
  __typename?: 'message_max_fields';
  index?: Maybe<Scalars['Int']>;
  inner_index?: Maybe<Scalars['Int']>;
  program?: Maybe<Scalars['String']>;
  transaction_hash?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "message" */
export type Message_Max_Order_By = {
  index?: Maybe<Order_By>;
  inner_index?: Maybe<Order_By>;
  program?: Maybe<Order_By>;
  transaction_hash?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Message_Min_Fields = {
  __typename?: 'message_min_fields';
  index?: Maybe<Scalars['Int']>;
  inner_index?: Maybe<Scalars['Int']>;
  program?: Maybe<Scalars['String']>;
  transaction_hash?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "message" */
export type Message_Min_Order_By = {
  index?: Maybe<Order_By>;
  inner_index?: Maybe<Order_By>;
  program?: Maybe<Order_By>;
  transaction_hash?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "message". */
export type Message_Order_By = {
  index?: Maybe<Order_By>;
  inner_index?: Maybe<Order_By>;
  involved_accounts?: Maybe<Order_By>;
  program?: Maybe<Order_By>;
  transaction?: Maybe<Transaction_Order_By>;
  transaction_hash?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** select columns of table "message" */
export enum Message_Select_Column {
  /** column name */
  Index = 'index',
  /** column name */
  InnerIndex = 'inner_index',
  /** column name */
  InvolvedAccounts = 'involved_accounts',
  /** column name */
  Program = 'program',
  /** column name */
  TransactionHash = 'transaction_hash',
  /** column name */
  Type = 'type',
  /** column name */
  Value = 'value'
}

/** aggregate stddev on columns */
export type Message_Stddev_Fields = {
  __typename?: 'message_stddev_fields';
  index?: Maybe<Scalars['Float']>;
  inner_index?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "message" */
export type Message_Stddev_Order_By = {
  index?: Maybe<Order_By>;
  inner_index?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Message_Stddev_Pop_Fields = {
  __typename?: 'message_stddev_pop_fields';
  index?: Maybe<Scalars['Float']>;
  inner_index?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "message" */
export type Message_Stddev_Pop_Order_By = {
  index?: Maybe<Order_By>;
  inner_index?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Message_Stddev_Samp_Fields = {
  __typename?: 'message_stddev_samp_fields';
  index?: Maybe<Scalars['Float']>;
  inner_index?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "message" */
export type Message_Stddev_Samp_Order_By = {
  index?: Maybe<Order_By>;
  inner_index?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Message_Sum_Fields = {
  __typename?: 'message_sum_fields';
  index?: Maybe<Scalars['Int']>;
  inner_index?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "message" */
export type Message_Sum_Order_By = {
  index?: Maybe<Order_By>;
  inner_index?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Message_Var_Pop_Fields = {
  __typename?: 'message_var_pop_fields';
  index?: Maybe<Scalars['Float']>;
  inner_index?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "message" */
export type Message_Var_Pop_Order_By = {
  index?: Maybe<Order_By>;
  inner_index?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Message_Var_Samp_Fields = {
  __typename?: 'message_var_samp_fields';
  index?: Maybe<Scalars['Float']>;
  inner_index?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "message" */
export type Message_Var_Samp_Order_By = {
  index?: Maybe<Order_By>;
  inner_index?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Message_Variance_Fields = {
  __typename?: 'message_variance_fields';
  index?: Maybe<Scalars['Float']>;
  inner_index?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "message" */
export type Message_Variance_Order_By = {
  index?: Maybe<Order_By>;
  inner_index?: Maybe<Order_By>;
};

export type Messages_By_Address_Args = {
  addresses?: Maybe<Scalars['_text']>;
  limit?: Maybe<Scalars['bigint']>;
  offset?: Maybe<Scalars['bigint']>;
  types?: Maybe<Scalars['_text']>;
};

/** columns and relationships of "multisig" */
export type Multisig = {
  __typename?: 'multisig';
  address: Scalars['String'];
  m: Scalars['Int'];
  signers: Scalars['_text'];
};

/** aggregated selection of "multisig" */
export type Multisig_Aggregate = {
  __typename?: 'multisig_aggregate';
  aggregate?: Maybe<Multisig_Aggregate_Fields>;
  nodes: Array<Multisig>;
};

/** aggregate fields of "multisig" */
export type Multisig_Aggregate_Fields = {
  __typename?: 'multisig_aggregate_fields';
  avg?: Maybe<Multisig_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Multisig_Max_Fields>;
  min?: Maybe<Multisig_Min_Fields>;
  stddev?: Maybe<Multisig_Stddev_Fields>;
  stddev_pop?: Maybe<Multisig_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Multisig_Stddev_Samp_Fields>;
  sum?: Maybe<Multisig_Sum_Fields>;
  var_pop?: Maybe<Multisig_Var_Pop_Fields>;
  var_samp?: Maybe<Multisig_Var_Samp_Fields>;
  variance?: Maybe<Multisig_Variance_Fields>;
};


/** aggregate fields of "multisig" */
export type Multisig_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Multisig_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Multisig_Avg_Fields = {
  __typename?: 'multisig_avg_fields';
  m?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "multisig". All fields are combined with a logical 'AND'. */
export type Multisig_Bool_Exp = {
  _and?: Maybe<Array<Multisig_Bool_Exp>>;
  _not?: Maybe<Multisig_Bool_Exp>;
  _or?: Maybe<Array<Multisig_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  m?: Maybe<Int_Comparison_Exp>;
  signers?: Maybe<_Text_Comparison_Exp>;
};

/** aggregate max on columns */
export type Multisig_Max_Fields = {
  __typename?: 'multisig_max_fields';
  address?: Maybe<Scalars['String']>;
  m?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Multisig_Min_Fields = {
  __typename?: 'multisig_min_fields';
  address?: Maybe<Scalars['String']>;
  m?: Maybe<Scalars['Int']>;
};

/** Ordering options when selecting data from "multisig". */
export type Multisig_Order_By = {
  address?: Maybe<Order_By>;
  m?: Maybe<Order_By>;
  signers?: Maybe<Order_By>;
};

/** select columns of table "multisig" */
export enum Multisig_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  M = 'm',
  /** column name */
  Signers = 'signers'
}

/** aggregate stddev on columns */
export type Multisig_Stddev_Fields = {
  __typename?: 'multisig_stddev_fields';
  m?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Multisig_Stddev_Pop_Fields = {
  __typename?: 'multisig_stddev_pop_fields';
  m?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Multisig_Stddev_Samp_Fields = {
  __typename?: 'multisig_stddev_samp_fields';
  m?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Multisig_Sum_Fields = {
  __typename?: 'multisig_sum_fields';
  m?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Multisig_Var_Pop_Fields = {
  __typename?: 'multisig_var_pop_fields';
  m?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Multisig_Var_Samp_Fields = {
  __typename?: 'multisig_var_samp_fields';
  m?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Multisig_Variance_Fields = {
  __typename?: 'multisig_variance_fields';
  m?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "nonce_account" */
export type Nonce_Account = {
  __typename?: 'nonce_account';
  address: Scalars['String'];
  authority: Scalars['String'];
  blockhash: Scalars['String'];
  lamports_per_signature: Scalars['Int'];
};

/** aggregated selection of "nonce_account" */
export type Nonce_Account_Aggregate = {
  __typename?: 'nonce_account_aggregate';
  aggregate?: Maybe<Nonce_Account_Aggregate_Fields>;
  nodes: Array<Nonce_Account>;
};

/** aggregate fields of "nonce_account" */
export type Nonce_Account_Aggregate_Fields = {
  __typename?: 'nonce_account_aggregate_fields';
  avg?: Maybe<Nonce_Account_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Nonce_Account_Max_Fields>;
  min?: Maybe<Nonce_Account_Min_Fields>;
  stddev?: Maybe<Nonce_Account_Stddev_Fields>;
  stddev_pop?: Maybe<Nonce_Account_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nonce_Account_Stddev_Samp_Fields>;
  sum?: Maybe<Nonce_Account_Sum_Fields>;
  var_pop?: Maybe<Nonce_Account_Var_Pop_Fields>;
  var_samp?: Maybe<Nonce_Account_Var_Samp_Fields>;
  variance?: Maybe<Nonce_Account_Variance_Fields>;
};


/** aggregate fields of "nonce_account" */
export type Nonce_Account_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Nonce_Account_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Nonce_Account_Avg_Fields = {
  __typename?: 'nonce_account_avg_fields';
  lamports_per_signature?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "nonce_account". All fields are combined with a logical 'AND'. */
export type Nonce_Account_Bool_Exp = {
  _and?: Maybe<Array<Nonce_Account_Bool_Exp>>;
  _not?: Maybe<Nonce_Account_Bool_Exp>;
  _or?: Maybe<Array<Nonce_Account_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  authority?: Maybe<String_Comparison_Exp>;
  blockhash?: Maybe<String_Comparison_Exp>;
  lamports_per_signature?: Maybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Nonce_Account_Max_Fields = {
  __typename?: 'nonce_account_max_fields';
  address?: Maybe<Scalars['String']>;
  authority?: Maybe<Scalars['String']>;
  blockhash?: Maybe<Scalars['String']>;
  lamports_per_signature?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Nonce_Account_Min_Fields = {
  __typename?: 'nonce_account_min_fields';
  address?: Maybe<Scalars['String']>;
  authority?: Maybe<Scalars['String']>;
  blockhash?: Maybe<Scalars['String']>;
  lamports_per_signature?: Maybe<Scalars['Int']>;
};

/** Ordering options when selecting data from "nonce_account". */
export type Nonce_Account_Order_By = {
  address?: Maybe<Order_By>;
  authority?: Maybe<Order_By>;
  blockhash?: Maybe<Order_By>;
  lamports_per_signature?: Maybe<Order_By>;
};

/** select columns of table "nonce_account" */
export enum Nonce_Account_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Authority = 'authority',
  /** column name */
  Blockhash = 'blockhash',
  /** column name */
  LamportsPerSignature = 'lamports_per_signature'
}

/** aggregate stddev on columns */
export type Nonce_Account_Stddev_Fields = {
  __typename?: 'nonce_account_stddev_fields';
  lamports_per_signature?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Nonce_Account_Stddev_Pop_Fields = {
  __typename?: 'nonce_account_stddev_pop_fields';
  lamports_per_signature?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Nonce_Account_Stddev_Samp_Fields = {
  __typename?: 'nonce_account_stddev_samp_fields';
  lamports_per_signature?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Nonce_Account_Sum_Fields = {
  __typename?: 'nonce_account_sum_fields';
  lamports_per_signature?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Nonce_Account_Var_Pop_Fields = {
  __typename?: 'nonce_account_var_pop_fields';
  lamports_per_signature?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Nonce_Account_Var_Samp_Fields = {
  __typename?: 'nonce_account_var_samp_fields';
  lamports_per_signature?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Nonce_Account_Variance_Fields = {
  __typename?: 'nonce_account_variance_fields';
  lamports_per_signature?: Maybe<Scalars['Float']>;
};


/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "program_account" */
export type Program_Account = {
  __typename?: 'program_account';
  address: Scalars['String'];
  /** An object relationship */
  program_data?: Maybe<Program_Data_Account>;
  program_data_account: Scalars['String'];
};

/** aggregated selection of "program_account" */
export type Program_Account_Aggregate = {
  __typename?: 'program_account_aggregate';
  aggregate?: Maybe<Program_Account_Aggregate_Fields>;
  nodes: Array<Program_Account>;
};

/** aggregate fields of "program_account" */
export type Program_Account_Aggregate_Fields = {
  __typename?: 'program_account_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Program_Account_Max_Fields>;
  min?: Maybe<Program_Account_Min_Fields>;
};


/** aggregate fields of "program_account" */
export type Program_Account_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Program_Account_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "program_account". All fields are combined with a logical 'AND'. */
export type Program_Account_Bool_Exp = {
  _and?: Maybe<Array<Program_Account_Bool_Exp>>;
  _not?: Maybe<Program_Account_Bool_Exp>;
  _or?: Maybe<Array<Program_Account_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  program_data?: Maybe<Program_Data_Account_Bool_Exp>;
  program_data_account?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Program_Account_Max_Fields = {
  __typename?: 'program_account_max_fields';
  address?: Maybe<Scalars['String']>;
  program_data_account?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Program_Account_Min_Fields = {
  __typename?: 'program_account_min_fields';
  address?: Maybe<Scalars['String']>;
  program_data_account?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "program_account". */
export type Program_Account_Order_By = {
  address?: Maybe<Order_By>;
  program_data?: Maybe<Program_Data_Account_Order_By>;
  program_data_account?: Maybe<Order_By>;
};

/** select columns of table "program_account" */
export enum Program_Account_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  ProgramDataAccount = 'program_data_account'
}

/** columns and relationships of "program_data_account" */
export type Program_Data_Account = {
  __typename?: 'program_data_account';
  address: Scalars['String'];
  last_modified_slot: Scalars['bigint'];
  update_authority: Scalars['String'];
};

/** aggregated selection of "program_data_account" */
export type Program_Data_Account_Aggregate = {
  __typename?: 'program_data_account_aggregate';
  aggregate?: Maybe<Program_Data_Account_Aggregate_Fields>;
  nodes: Array<Program_Data_Account>;
};

/** aggregate fields of "program_data_account" */
export type Program_Data_Account_Aggregate_Fields = {
  __typename?: 'program_data_account_aggregate_fields';
  avg?: Maybe<Program_Data_Account_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Program_Data_Account_Max_Fields>;
  min?: Maybe<Program_Data_Account_Min_Fields>;
  stddev?: Maybe<Program_Data_Account_Stddev_Fields>;
  stddev_pop?: Maybe<Program_Data_Account_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Program_Data_Account_Stddev_Samp_Fields>;
  sum?: Maybe<Program_Data_Account_Sum_Fields>;
  var_pop?: Maybe<Program_Data_Account_Var_Pop_Fields>;
  var_samp?: Maybe<Program_Data_Account_Var_Samp_Fields>;
  variance?: Maybe<Program_Data_Account_Variance_Fields>;
};


/** aggregate fields of "program_data_account" */
export type Program_Data_Account_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Program_Data_Account_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Program_Data_Account_Avg_Fields = {
  __typename?: 'program_data_account_avg_fields';
  last_modified_slot?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "program_data_account". All fields are combined with a logical 'AND'. */
export type Program_Data_Account_Bool_Exp = {
  _and?: Maybe<Array<Program_Data_Account_Bool_Exp>>;
  _not?: Maybe<Program_Data_Account_Bool_Exp>;
  _or?: Maybe<Array<Program_Data_Account_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  last_modified_slot?: Maybe<Bigint_Comparison_Exp>;
  update_authority?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Program_Data_Account_Max_Fields = {
  __typename?: 'program_data_account_max_fields';
  address?: Maybe<Scalars['String']>;
  last_modified_slot?: Maybe<Scalars['bigint']>;
  update_authority?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Program_Data_Account_Min_Fields = {
  __typename?: 'program_data_account_min_fields';
  address?: Maybe<Scalars['String']>;
  last_modified_slot?: Maybe<Scalars['bigint']>;
  update_authority?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "program_data_account". */
export type Program_Data_Account_Order_By = {
  address?: Maybe<Order_By>;
  last_modified_slot?: Maybe<Order_By>;
  update_authority?: Maybe<Order_By>;
};

/** select columns of table "program_data_account" */
export enum Program_Data_Account_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  LastModifiedSlot = 'last_modified_slot',
  /** column name */
  UpdateAuthority = 'update_authority'
}

/** aggregate stddev on columns */
export type Program_Data_Account_Stddev_Fields = {
  __typename?: 'program_data_account_stddev_fields';
  last_modified_slot?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Program_Data_Account_Stddev_Pop_Fields = {
  __typename?: 'program_data_account_stddev_pop_fields';
  last_modified_slot?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Program_Data_Account_Stddev_Samp_Fields = {
  __typename?: 'program_data_account_stddev_samp_fields';
  last_modified_slot?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Program_Data_Account_Sum_Fields = {
  __typename?: 'program_data_account_sum_fields';
  last_modified_slot?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Program_Data_Account_Var_Pop_Fields = {
  __typename?: 'program_data_account_var_pop_fields';
  last_modified_slot?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Program_Data_Account_Var_Samp_Fields = {
  __typename?: 'program_data_account_var_samp_fields';
  last_modified_slot?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Program_Data_Account_Variance_Fields = {
  __typename?: 'program_data_account_variance_fields';
  last_modified_slot?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "account_balance" */
  account_balance: Array<Account_Balance>;
  /** fetch aggregated fields from the table: "account_balance" */
  account_balance_aggregate: Account_Balance_Aggregate;
  /** fetch data from the table: "account_balance" using primary key columns */
  account_balance_by_pk?: Maybe<Account_Balance>;
  /** fetch data from the table: "block" */
  block: Array<Block>;
  /** fetch aggregated fields from the table: "block" */
  block_aggregate: Block_Aggregate;
  /** fetch data from the table: "block" using primary key columns */
  block_by_pk?: Maybe<Block>;
  /** fetch data from the table: "message" */
  message: Array<Message>;
  /** fetch aggregated fields from the table: "message" */
  message_aggregate: Message_Aggregate;
  /** execute function "messages_by_address" which returns "message" */
  messages_by_address: Array<Message>;
  /** execute function "messages_by_address" and query aggregates on result of table type "message" */
  messages_by_address_aggregate: Message_Aggregate;
  /** fetch data from the table: "multisig" */
  multisig: Array<Multisig>;
  /** fetch aggregated fields from the table: "multisig" */
  multisig_aggregate: Multisig_Aggregate;
  /** fetch data from the table: "multisig" using primary key columns */
  multisig_by_pk?: Maybe<Multisig>;
  /** fetch data from the table: "nonce_account" */
  nonce_account: Array<Nonce_Account>;
  /** fetch aggregated fields from the table: "nonce_account" */
  nonce_account_aggregate: Nonce_Account_Aggregate;
  /** fetch data from the table: "nonce_account" using primary key columns */
  nonce_account_by_pk?: Maybe<Nonce_Account>;
  /** fetch data from the table: "program_account" */
  program_account: Array<Program_Account>;
  /** fetch aggregated fields from the table: "program_account" */
  program_account_aggregate: Program_Account_Aggregate;
  /** fetch data from the table: "program_account" using primary key columns */
  program_account_by_pk?: Maybe<Program_Account>;
  /** fetch data from the table: "program_data_account" */
  program_data_account: Array<Program_Data_Account>;
  /** fetch aggregated fields from the table: "program_data_account" */
  program_data_account_aggregate: Program_Data_Account_Aggregate;
  /** fetch data from the table: "program_data_account" using primary key columns */
  program_data_account_by_pk?: Maybe<Program_Data_Account>;
  /** fetch data from the table: "token" */
  token: Array<Token>;
  /** fetch data from the table: "token_account" */
  token_account: Array<Token_Account>;
  /** fetch aggregated fields from the table: "token_account" */
  token_account_aggregate: Token_Account_Aggregate;
  /** fetch data from the table: "token_account_balance" */
  token_account_balance: Array<Token_Account_Balance>;
  /** fetch aggregated fields from the table: "token_account_balance" */
  token_account_balance_aggregate: Token_Account_Balance_Aggregate;
  /** fetch data from the table: "token_account_balance" using primary key columns */
  token_account_balance_by_pk?: Maybe<Token_Account_Balance>;
  /** fetch data from the table: "token_account" using primary key columns */
  token_account_by_pk?: Maybe<Token_Account>;
  /** fetch aggregated fields from the table: "token" */
  token_aggregate: Token_Aggregate;
  /** fetch data from the table: "token" using primary key columns */
  token_by_pk?: Maybe<Token>;
  /** fetch data from the table: "token_delegation" */
  token_delegation: Array<Token_Delegation>;
  /** fetch aggregated fields from the table: "token_delegation" */
  token_delegation_aggregate: Token_Delegation_Aggregate;
  /** fetch data from the table: "token_delegation" using primary key columns */
  token_delegation_by_pk?: Maybe<Token_Delegation>;
  /** fetch data from the table: "token_price" */
  token_price: Array<Token_Price>;
  /** fetch aggregated fields from the table: "token_price" */
  token_price_aggregate: Token_Price_Aggregate;
  /** fetch data from the table: "token_supply" */
  token_supply: Array<Token_Supply>;
  /** fetch aggregated fields from the table: "token_supply" */
  token_supply_aggregate: Token_Supply_Aggregate;
  /** fetch data from the table: "token_supply" using primary key columns */
  token_supply_by_pk?: Maybe<Token_Supply>;
  /** fetch data from the table: "token_unit" */
  token_unit: Array<Token_Unit>;
  /** fetch aggregated fields from the table: "token_unit" */
  token_unit_aggregate: Token_Unit_Aggregate;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "transaction" using primary key columns */
  transaction_by_pk?: Maybe<Transaction>;
  /** fetch data from the table: "validator_config" */
  validator_config: Array<Validator_Config>;
  /** fetch aggregated fields from the table: "validator_config" */
  validator_config_aggregate: Validator_Config_Aggregate;
  /** fetch data from the table: "validator_config" using primary key columns */
  validator_config_by_pk?: Maybe<Validator_Config>;
  /** fetch data from the table: "validator_status" */
  validator_status: Array<Validator_Status>;
  /** fetch aggregated fields from the table: "validator_status" */
  validator_status_aggregate: Validator_Status_Aggregate;
  /** fetch data from the table: "validator_status" using primary key columns */
  validator_status_by_pk?: Maybe<Validator_Status>;
  /** fetch data from the table: "vote_account" */
  vote_account: Array<Vote_Account>;
  /** fetch aggregated fields from the table: "vote_account" */
  vote_account_aggregate: Vote_Account_Aggregate;
  /** fetch data from the table: "vote_account" using primary key columns */
  vote_account_by_pk?: Maybe<Vote_Account>;
};


export type Query_RootAccount_BalanceArgs = {
  distinct_on?: Maybe<Array<Account_Balance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Balance_Order_By>>;
  where?: Maybe<Account_Balance_Bool_Exp>;
};


export type Query_RootAccount_Balance_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Balance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Balance_Order_By>>;
  where?: Maybe<Account_Balance_Bool_Exp>;
};


export type Query_RootAccount_Balance_By_PkArgs = {
  address: Scalars['String'];
};


export type Query_RootBlockArgs = {
  distinct_on?: Maybe<Array<Block_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Block_Order_By>>;
  where?: Maybe<Block_Bool_Exp>;
};


export type Query_RootBlock_AggregateArgs = {
  distinct_on?: Maybe<Array<Block_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Block_Order_By>>;
  where?: Maybe<Block_Bool_Exp>;
};


export type Query_RootBlock_By_PkArgs = {
  slot: Scalars['bigint'];
};


export type Query_RootMessageArgs = {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


export type Query_RootMessage_AggregateArgs = {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


export type Query_RootMessages_By_AddressArgs = {
  args: Messages_By_Address_Args;
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


export type Query_RootMessages_By_Address_AggregateArgs = {
  args: Messages_By_Address_Args;
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


export type Query_RootMultisigArgs = {
  distinct_on?: Maybe<Array<Multisig_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Multisig_Order_By>>;
  where?: Maybe<Multisig_Bool_Exp>;
};


export type Query_RootMultisig_AggregateArgs = {
  distinct_on?: Maybe<Array<Multisig_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Multisig_Order_By>>;
  where?: Maybe<Multisig_Bool_Exp>;
};


export type Query_RootMultisig_By_PkArgs = {
  address: Scalars['String'];
};


export type Query_RootNonce_AccountArgs = {
  distinct_on?: Maybe<Array<Nonce_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Nonce_Account_Order_By>>;
  where?: Maybe<Nonce_Account_Bool_Exp>;
};


export type Query_RootNonce_Account_AggregateArgs = {
  distinct_on?: Maybe<Array<Nonce_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Nonce_Account_Order_By>>;
  where?: Maybe<Nonce_Account_Bool_Exp>;
};


export type Query_RootNonce_Account_By_PkArgs = {
  address: Scalars['String'];
};


export type Query_RootProgram_AccountArgs = {
  distinct_on?: Maybe<Array<Program_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Program_Account_Order_By>>;
  where?: Maybe<Program_Account_Bool_Exp>;
};


export type Query_RootProgram_Account_AggregateArgs = {
  distinct_on?: Maybe<Array<Program_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Program_Account_Order_By>>;
  where?: Maybe<Program_Account_Bool_Exp>;
};


export type Query_RootProgram_Account_By_PkArgs = {
  address: Scalars['String'];
};


export type Query_RootProgram_Data_AccountArgs = {
  distinct_on?: Maybe<Array<Program_Data_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Program_Data_Account_Order_By>>;
  where?: Maybe<Program_Data_Account_Bool_Exp>;
};


export type Query_RootProgram_Data_Account_AggregateArgs = {
  distinct_on?: Maybe<Array<Program_Data_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Program_Data_Account_Order_By>>;
  where?: Maybe<Program_Data_Account_Bool_Exp>;
};


export type Query_RootProgram_Data_Account_By_PkArgs = {
  address: Scalars['String'];
};


export type Query_RootTokenArgs = {
  distinct_on?: Maybe<Array<Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Order_By>>;
  where?: Maybe<Token_Bool_Exp>;
};


export type Query_RootToken_AccountArgs = {
  distinct_on?: Maybe<Array<Token_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Account_Order_By>>;
  where?: Maybe<Token_Account_Bool_Exp>;
};


export type Query_RootToken_Account_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Account_Order_By>>;
  where?: Maybe<Token_Account_Bool_Exp>;
};


export type Query_RootToken_Account_BalanceArgs = {
  distinct_on?: Maybe<Array<Token_Account_Balance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Account_Balance_Order_By>>;
  where?: Maybe<Token_Account_Balance_Bool_Exp>;
};


export type Query_RootToken_Account_Balance_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Account_Balance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Account_Balance_Order_By>>;
  where?: Maybe<Token_Account_Balance_Bool_Exp>;
};


export type Query_RootToken_Account_Balance_By_PkArgs = {
  address: Scalars['String'];
};


export type Query_RootToken_Account_By_PkArgs = {
  address: Scalars['String'];
};


export type Query_RootToken_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Order_By>>;
  where?: Maybe<Token_Bool_Exp>;
};


export type Query_RootToken_By_PkArgs = {
  address: Scalars['String'];
};


export type Query_RootToken_DelegationArgs = {
  distinct_on?: Maybe<Array<Token_Delegation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Delegation_Order_By>>;
  where?: Maybe<Token_Delegation_Bool_Exp>;
};


export type Query_RootToken_Delegation_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Delegation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Delegation_Order_By>>;
  where?: Maybe<Token_Delegation_Bool_Exp>;
};


export type Query_RootToken_Delegation_By_PkArgs = {
  source_address: Scalars['String'];
};


export type Query_RootToken_PriceArgs = {
  distinct_on?: Maybe<Array<Token_Price_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_Order_By>>;
  where?: Maybe<Token_Price_Bool_Exp>;
};


export type Query_RootToken_Price_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Price_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_Order_By>>;
  where?: Maybe<Token_Price_Bool_Exp>;
};


export type Query_RootToken_SupplyArgs = {
  distinct_on?: Maybe<Array<Token_Supply_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Supply_Order_By>>;
  where?: Maybe<Token_Supply_Bool_Exp>;
};


export type Query_RootToken_Supply_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Supply_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Supply_Order_By>>;
  where?: Maybe<Token_Supply_Bool_Exp>;
};


export type Query_RootToken_Supply_By_PkArgs = {
  address: Scalars['String'];
};


export type Query_RootToken_UnitArgs = {
  distinct_on?: Maybe<Array<Token_Unit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Unit_Order_By>>;
  where?: Maybe<Token_Unit_Bool_Exp>;
};


export type Query_RootToken_Unit_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Unit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Unit_Order_By>>;
  where?: Maybe<Token_Unit_Bool_Exp>;
};


export type Query_RootTransactionArgs = {
  distinct_on?: Maybe<Array<Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Order_By>>;
  where?: Maybe<Transaction_Bool_Exp>;
};


export type Query_RootTransaction_AggregateArgs = {
  distinct_on?: Maybe<Array<Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Order_By>>;
  where?: Maybe<Transaction_Bool_Exp>;
};


export type Query_RootTransaction_By_PkArgs = {
  hash: Scalars['String'];
};


export type Query_RootValidator_ConfigArgs = {
  distinct_on?: Maybe<Array<Validator_Config_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Config_Order_By>>;
  where?: Maybe<Validator_Config_Bool_Exp>;
};


export type Query_RootValidator_Config_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Config_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Config_Order_By>>;
  where?: Maybe<Validator_Config_Bool_Exp>;
};


export type Query_RootValidator_Config_By_PkArgs = {
  address: Scalars['String'];
};


export type Query_RootValidator_StatusArgs = {
  distinct_on?: Maybe<Array<Validator_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Status_Order_By>>;
  where?: Maybe<Validator_Status_Bool_Exp>;
};


export type Query_RootValidator_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Status_Order_By>>;
  where?: Maybe<Validator_Status_Bool_Exp>;
};


export type Query_RootValidator_Status_By_PkArgs = {
  address: Scalars['String'];
  slot: Scalars['bigint'];
};


export type Query_RootVote_AccountArgs = {
  distinct_on?: Maybe<Array<Vote_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vote_Account_Order_By>>;
  where?: Maybe<Vote_Account_Bool_Exp>;
};


export type Query_RootVote_Account_AggregateArgs = {
  distinct_on?: Maybe<Array<Vote_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vote_Account_Order_By>>;
  where?: Maybe<Vote_Account_Bool_Exp>;
};


export type Query_RootVote_Account_By_PkArgs = {
  address: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "account_balance" */
  account_balance: Array<Account_Balance>;
  /** fetch aggregated fields from the table: "account_balance" */
  account_balance_aggregate: Account_Balance_Aggregate;
  /** fetch data from the table: "account_balance" using primary key columns */
  account_balance_by_pk?: Maybe<Account_Balance>;
  /** fetch data from the table: "block" */
  block: Array<Block>;
  /** fetch aggregated fields from the table: "block" */
  block_aggregate: Block_Aggregate;
  /** fetch data from the table: "block" using primary key columns */
  block_by_pk?: Maybe<Block>;
  /** fetch data from the table: "message" */
  message: Array<Message>;
  /** fetch aggregated fields from the table: "message" */
  message_aggregate: Message_Aggregate;
  /** execute function "messages_by_address" which returns "message" */
  messages_by_address: Array<Message>;
  /** execute function "messages_by_address" and query aggregates on result of table type "message" */
  messages_by_address_aggregate: Message_Aggregate;
  /** fetch data from the table: "multisig" */
  multisig: Array<Multisig>;
  /** fetch aggregated fields from the table: "multisig" */
  multisig_aggregate: Multisig_Aggregate;
  /** fetch data from the table: "multisig" using primary key columns */
  multisig_by_pk?: Maybe<Multisig>;
  /** fetch data from the table: "nonce_account" */
  nonce_account: Array<Nonce_Account>;
  /** fetch aggregated fields from the table: "nonce_account" */
  nonce_account_aggregate: Nonce_Account_Aggregate;
  /** fetch data from the table: "nonce_account" using primary key columns */
  nonce_account_by_pk?: Maybe<Nonce_Account>;
  /** fetch data from the table: "program_account" */
  program_account: Array<Program_Account>;
  /** fetch aggregated fields from the table: "program_account" */
  program_account_aggregate: Program_Account_Aggregate;
  /** fetch data from the table: "program_account" using primary key columns */
  program_account_by_pk?: Maybe<Program_Account>;
  /** fetch data from the table: "program_data_account" */
  program_data_account: Array<Program_Data_Account>;
  /** fetch aggregated fields from the table: "program_data_account" */
  program_data_account_aggregate: Program_Data_Account_Aggregate;
  /** fetch data from the table: "program_data_account" using primary key columns */
  program_data_account_by_pk?: Maybe<Program_Data_Account>;
  /** fetch data from the table: "token" */
  token: Array<Token>;
  /** fetch data from the table: "token_account" */
  token_account: Array<Token_Account>;
  /** fetch aggregated fields from the table: "token_account" */
  token_account_aggregate: Token_Account_Aggregate;
  /** fetch data from the table: "token_account_balance" */
  token_account_balance: Array<Token_Account_Balance>;
  /** fetch aggregated fields from the table: "token_account_balance" */
  token_account_balance_aggregate: Token_Account_Balance_Aggregate;
  /** fetch data from the table: "token_account_balance" using primary key columns */
  token_account_balance_by_pk?: Maybe<Token_Account_Balance>;
  /** fetch data from the table: "token_account" using primary key columns */
  token_account_by_pk?: Maybe<Token_Account>;
  /** fetch aggregated fields from the table: "token" */
  token_aggregate: Token_Aggregate;
  /** fetch data from the table: "token" using primary key columns */
  token_by_pk?: Maybe<Token>;
  /** fetch data from the table: "token_delegation" */
  token_delegation: Array<Token_Delegation>;
  /** fetch aggregated fields from the table: "token_delegation" */
  token_delegation_aggregate: Token_Delegation_Aggregate;
  /** fetch data from the table: "token_delegation" using primary key columns */
  token_delegation_by_pk?: Maybe<Token_Delegation>;
  /** fetch data from the table: "token_price" */
  token_price: Array<Token_Price>;
  /** fetch aggregated fields from the table: "token_price" */
  token_price_aggregate: Token_Price_Aggregate;
  /** fetch data from the table: "token_supply" */
  token_supply: Array<Token_Supply>;
  /** fetch aggregated fields from the table: "token_supply" */
  token_supply_aggregate: Token_Supply_Aggregate;
  /** fetch data from the table: "token_supply" using primary key columns */
  token_supply_by_pk?: Maybe<Token_Supply>;
  /** fetch data from the table: "token_unit" */
  token_unit: Array<Token_Unit>;
  /** fetch aggregated fields from the table: "token_unit" */
  token_unit_aggregate: Token_Unit_Aggregate;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "transaction" using primary key columns */
  transaction_by_pk?: Maybe<Transaction>;
  /** fetch data from the table: "validator_config" */
  validator_config: Array<Validator_Config>;
  /** fetch aggregated fields from the table: "validator_config" */
  validator_config_aggregate: Validator_Config_Aggregate;
  /** fetch data from the table: "validator_config" using primary key columns */
  validator_config_by_pk?: Maybe<Validator_Config>;
  /** fetch data from the table: "validator_status" */
  validator_status: Array<Validator_Status>;
  /** fetch aggregated fields from the table: "validator_status" */
  validator_status_aggregate: Validator_Status_Aggregate;
  /** fetch data from the table: "validator_status" using primary key columns */
  validator_status_by_pk?: Maybe<Validator_Status>;
  /** fetch data from the table: "vote_account" */
  vote_account: Array<Vote_Account>;
  /** fetch aggregated fields from the table: "vote_account" */
  vote_account_aggregate: Vote_Account_Aggregate;
  /** fetch data from the table: "vote_account" using primary key columns */
  vote_account_by_pk?: Maybe<Vote_Account>;
};


export type Subscription_RootAccount_BalanceArgs = {
  distinct_on?: Maybe<Array<Account_Balance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Balance_Order_By>>;
  where?: Maybe<Account_Balance_Bool_Exp>;
};


export type Subscription_RootAccount_Balance_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Balance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Balance_Order_By>>;
  where?: Maybe<Account_Balance_Bool_Exp>;
};


export type Subscription_RootAccount_Balance_By_PkArgs = {
  address: Scalars['String'];
};


export type Subscription_RootBlockArgs = {
  distinct_on?: Maybe<Array<Block_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Block_Order_By>>;
  where?: Maybe<Block_Bool_Exp>;
};


export type Subscription_RootBlock_AggregateArgs = {
  distinct_on?: Maybe<Array<Block_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Block_Order_By>>;
  where?: Maybe<Block_Bool_Exp>;
};


export type Subscription_RootBlock_By_PkArgs = {
  slot: Scalars['bigint'];
};


export type Subscription_RootMessageArgs = {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


export type Subscription_RootMessage_AggregateArgs = {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


export type Subscription_RootMessages_By_AddressArgs = {
  args: Messages_By_Address_Args;
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


export type Subscription_RootMessages_By_Address_AggregateArgs = {
  args: Messages_By_Address_Args;
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


export type Subscription_RootMultisigArgs = {
  distinct_on?: Maybe<Array<Multisig_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Multisig_Order_By>>;
  where?: Maybe<Multisig_Bool_Exp>;
};


export type Subscription_RootMultisig_AggregateArgs = {
  distinct_on?: Maybe<Array<Multisig_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Multisig_Order_By>>;
  where?: Maybe<Multisig_Bool_Exp>;
};


export type Subscription_RootMultisig_By_PkArgs = {
  address: Scalars['String'];
};


export type Subscription_RootNonce_AccountArgs = {
  distinct_on?: Maybe<Array<Nonce_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Nonce_Account_Order_By>>;
  where?: Maybe<Nonce_Account_Bool_Exp>;
};


export type Subscription_RootNonce_Account_AggregateArgs = {
  distinct_on?: Maybe<Array<Nonce_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Nonce_Account_Order_By>>;
  where?: Maybe<Nonce_Account_Bool_Exp>;
};


export type Subscription_RootNonce_Account_By_PkArgs = {
  address: Scalars['String'];
};


export type Subscription_RootProgram_AccountArgs = {
  distinct_on?: Maybe<Array<Program_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Program_Account_Order_By>>;
  where?: Maybe<Program_Account_Bool_Exp>;
};


export type Subscription_RootProgram_Account_AggregateArgs = {
  distinct_on?: Maybe<Array<Program_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Program_Account_Order_By>>;
  where?: Maybe<Program_Account_Bool_Exp>;
};


export type Subscription_RootProgram_Account_By_PkArgs = {
  address: Scalars['String'];
};


export type Subscription_RootProgram_Data_AccountArgs = {
  distinct_on?: Maybe<Array<Program_Data_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Program_Data_Account_Order_By>>;
  where?: Maybe<Program_Data_Account_Bool_Exp>;
};


export type Subscription_RootProgram_Data_Account_AggregateArgs = {
  distinct_on?: Maybe<Array<Program_Data_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Program_Data_Account_Order_By>>;
  where?: Maybe<Program_Data_Account_Bool_Exp>;
};


export type Subscription_RootProgram_Data_Account_By_PkArgs = {
  address: Scalars['String'];
};


export type Subscription_RootTokenArgs = {
  distinct_on?: Maybe<Array<Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Order_By>>;
  where?: Maybe<Token_Bool_Exp>;
};


export type Subscription_RootToken_AccountArgs = {
  distinct_on?: Maybe<Array<Token_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Account_Order_By>>;
  where?: Maybe<Token_Account_Bool_Exp>;
};


export type Subscription_RootToken_Account_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Account_Order_By>>;
  where?: Maybe<Token_Account_Bool_Exp>;
};


export type Subscription_RootToken_Account_BalanceArgs = {
  distinct_on?: Maybe<Array<Token_Account_Balance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Account_Balance_Order_By>>;
  where?: Maybe<Token_Account_Balance_Bool_Exp>;
};


export type Subscription_RootToken_Account_Balance_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Account_Balance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Account_Balance_Order_By>>;
  where?: Maybe<Token_Account_Balance_Bool_Exp>;
};


export type Subscription_RootToken_Account_Balance_By_PkArgs = {
  address: Scalars['String'];
};


export type Subscription_RootToken_Account_By_PkArgs = {
  address: Scalars['String'];
};


export type Subscription_RootToken_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Order_By>>;
  where?: Maybe<Token_Bool_Exp>;
};


export type Subscription_RootToken_By_PkArgs = {
  address: Scalars['String'];
};


export type Subscription_RootToken_DelegationArgs = {
  distinct_on?: Maybe<Array<Token_Delegation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Delegation_Order_By>>;
  where?: Maybe<Token_Delegation_Bool_Exp>;
};


export type Subscription_RootToken_Delegation_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Delegation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Delegation_Order_By>>;
  where?: Maybe<Token_Delegation_Bool_Exp>;
};


export type Subscription_RootToken_Delegation_By_PkArgs = {
  source_address: Scalars['String'];
};


export type Subscription_RootToken_PriceArgs = {
  distinct_on?: Maybe<Array<Token_Price_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_Order_By>>;
  where?: Maybe<Token_Price_Bool_Exp>;
};


export type Subscription_RootToken_Price_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Price_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_Order_By>>;
  where?: Maybe<Token_Price_Bool_Exp>;
};


export type Subscription_RootToken_SupplyArgs = {
  distinct_on?: Maybe<Array<Token_Supply_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Supply_Order_By>>;
  where?: Maybe<Token_Supply_Bool_Exp>;
};


export type Subscription_RootToken_Supply_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Supply_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Supply_Order_By>>;
  where?: Maybe<Token_Supply_Bool_Exp>;
};


export type Subscription_RootToken_Supply_By_PkArgs = {
  address: Scalars['String'];
};


export type Subscription_RootToken_UnitArgs = {
  distinct_on?: Maybe<Array<Token_Unit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Unit_Order_By>>;
  where?: Maybe<Token_Unit_Bool_Exp>;
};


export type Subscription_RootToken_Unit_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Unit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Unit_Order_By>>;
  where?: Maybe<Token_Unit_Bool_Exp>;
};


export type Subscription_RootTransactionArgs = {
  distinct_on?: Maybe<Array<Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Order_By>>;
  where?: Maybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_AggregateArgs = {
  distinct_on?: Maybe<Array<Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Order_By>>;
  where?: Maybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_By_PkArgs = {
  hash: Scalars['String'];
};


export type Subscription_RootValidator_ConfigArgs = {
  distinct_on?: Maybe<Array<Validator_Config_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Config_Order_By>>;
  where?: Maybe<Validator_Config_Bool_Exp>;
};


export type Subscription_RootValidator_Config_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Config_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Config_Order_By>>;
  where?: Maybe<Validator_Config_Bool_Exp>;
};


export type Subscription_RootValidator_Config_By_PkArgs = {
  address: Scalars['String'];
};


export type Subscription_RootValidator_StatusArgs = {
  distinct_on?: Maybe<Array<Validator_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Status_Order_By>>;
  where?: Maybe<Validator_Status_Bool_Exp>;
};


export type Subscription_RootValidator_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Status_Order_By>>;
  where?: Maybe<Validator_Status_Bool_Exp>;
};


export type Subscription_RootValidator_Status_By_PkArgs = {
  address: Scalars['String'];
  slot: Scalars['bigint'];
};


export type Subscription_RootVote_AccountArgs = {
  distinct_on?: Maybe<Array<Vote_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vote_Account_Order_By>>;
  where?: Maybe<Vote_Account_Bool_Exp>;
};


export type Subscription_RootVote_Account_AggregateArgs = {
  distinct_on?: Maybe<Array<Vote_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vote_Account_Order_By>>;
  where?: Maybe<Vote_Account_Bool_Exp>;
};


export type Subscription_RootVote_Account_By_PkArgs = {
  address: Scalars['String'];
};


/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};

/** columns and relationships of "token" */
export type Token = {
  __typename?: 'token';
  address: Scalars['String'];
  decimals: Scalars['Int'];
  freeze_authority: Scalars['String'];
  mint_authority: Scalars['String'];
  /** An array relationship */
  token_accounts: Array<Token_Account>;
  /** An aggregate relationship */
  token_accounts_aggregate: Token_Account_Aggregate;
  /** An object relationship */
  token_supply?: Maybe<Token_Supply>;
};


/** columns and relationships of "token" */
export type TokenToken_AccountsArgs = {
  distinct_on?: Maybe<Array<Token_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Account_Order_By>>;
  where?: Maybe<Token_Account_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenToken_Accounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Account_Order_By>>;
  where?: Maybe<Token_Account_Bool_Exp>;
};

/** columns and relationships of "token_account" */
export type Token_Account = {
  __typename?: 'token_account';
  address: Scalars['String'];
  owner: Scalars['String'];
  token: Scalars['String'];
  /** An object relationship */
  token_by_account?: Maybe<Token>;
};

/** aggregated selection of "token_account" */
export type Token_Account_Aggregate = {
  __typename?: 'token_account_aggregate';
  aggregate?: Maybe<Token_Account_Aggregate_Fields>;
  nodes: Array<Token_Account>;
};

/** aggregate fields of "token_account" */
export type Token_Account_Aggregate_Fields = {
  __typename?: 'token_account_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Token_Account_Max_Fields>;
  min?: Maybe<Token_Account_Min_Fields>;
};


/** aggregate fields of "token_account" */
export type Token_Account_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Token_Account_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "token_account" */
export type Token_Account_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Token_Account_Max_Order_By>;
  min?: Maybe<Token_Account_Min_Order_By>;
};

/** columns and relationships of "token_account_balance" */
export type Token_Account_Balance = {
  __typename?: 'token_account_balance';
  address: Scalars['String'];
  balance: Scalars['numeric'];
  /** An object relationship */
  token_account?: Maybe<Token_Account>;
};

/** aggregated selection of "token_account_balance" */
export type Token_Account_Balance_Aggregate = {
  __typename?: 'token_account_balance_aggregate';
  aggregate?: Maybe<Token_Account_Balance_Aggregate_Fields>;
  nodes: Array<Token_Account_Balance>;
};

/** aggregate fields of "token_account_balance" */
export type Token_Account_Balance_Aggregate_Fields = {
  __typename?: 'token_account_balance_aggregate_fields';
  avg?: Maybe<Token_Account_Balance_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Token_Account_Balance_Max_Fields>;
  min?: Maybe<Token_Account_Balance_Min_Fields>;
  stddev?: Maybe<Token_Account_Balance_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Account_Balance_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Account_Balance_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Account_Balance_Sum_Fields>;
  var_pop?: Maybe<Token_Account_Balance_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Account_Balance_Var_Samp_Fields>;
  variance?: Maybe<Token_Account_Balance_Variance_Fields>;
};


/** aggregate fields of "token_account_balance" */
export type Token_Account_Balance_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Token_Account_Balance_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Token_Account_Balance_Avg_Fields = {
  __typename?: 'token_account_balance_avg_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "token_account_balance". All fields are combined with a logical 'AND'. */
export type Token_Account_Balance_Bool_Exp = {
  _and?: Maybe<Array<Token_Account_Balance_Bool_Exp>>;
  _not?: Maybe<Token_Account_Balance_Bool_Exp>;
  _or?: Maybe<Array<Token_Account_Balance_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  balance?: Maybe<Numeric_Comparison_Exp>;
  token_account?: Maybe<Token_Account_Bool_Exp>;
};

/** aggregate max on columns */
export type Token_Account_Balance_Max_Fields = {
  __typename?: 'token_account_balance_max_fields';
  address?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Token_Account_Balance_Min_Fields = {
  __typename?: 'token_account_balance_min_fields';
  address?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['numeric']>;
};

/** Ordering options when selecting data from "token_account_balance". */
export type Token_Account_Balance_Order_By = {
  address?: Maybe<Order_By>;
  balance?: Maybe<Order_By>;
  token_account?: Maybe<Token_Account_Order_By>;
};

/** select columns of table "token_account_balance" */
export enum Token_Account_Balance_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Balance = 'balance'
}

/** aggregate stddev on columns */
export type Token_Account_Balance_Stddev_Fields = {
  __typename?: 'token_account_balance_stddev_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Token_Account_Balance_Stddev_Pop_Fields = {
  __typename?: 'token_account_balance_stddev_pop_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Token_Account_Balance_Stddev_Samp_Fields = {
  __typename?: 'token_account_balance_stddev_samp_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Token_Account_Balance_Sum_Fields = {
  __typename?: 'token_account_balance_sum_fields';
  balance?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type Token_Account_Balance_Var_Pop_Fields = {
  __typename?: 'token_account_balance_var_pop_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Token_Account_Balance_Var_Samp_Fields = {
  __typename?: 'token_account_balance_var_samp_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Token_Account_Balance_Variance_Fields = {
  __typename?: 'token_account_balance_variance_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "token_account". All fields are combined with a logical 'AND'. */
export type Token_Account_Bool_Exp = {
  _and?: Maybe<Array<Token_Account_Bool_Exp>>;
  _not?: Maybe<Token_Account_Bool_Exp>;
  _or?: Maybe<Array<Token_Account_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  owner?: Maybe<String_Comparison_Exp>;
  token?: Maybe<String_Comparison_Exp>;
  token_by_account?: Maybe<Token_Bool_Exp>;
};

/** aggregate max on columns */
export type Token_Account_Max_Fields = {
  __typename?: 'token_account_max_fields';
  address?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "token_account" */
export type Token_Account_Max_Order_By = {
  address?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Token_Account_Min_Fields = {
  __typename?: 'token_account_min_fields';
  address?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "token_account" */
export type Token_Account_Min_Order_By = {
  address?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "token_account". */
export type Token_Account_Order_By = {
  address?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  token_by_account?: Maybe<Token_Order_By>;
};

/** select columns of table "token_account" */
export enum Token_Account_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Owner = 'owner',
  /** column name */
  Token = 'token'
}

/** aggregated selection of "token" */
export type Token_Aggregate = {
  __typename?: 'token_aggregate';
  aggregate?: Maybe<Token_Aggregate_Fields>;
  nodes: Array<Token>;
};

/** aggregate fields of "token" */
export type Token_Aggregate_Fields = {
  __typename?: 'token_aggregate_fields';
  avg?: Maybe<Token_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Token_Max_Fields>;
  min?: Maybe<Token_Min_Fields>;
  stddev?: Maybe<Token_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Sum_Fields>;
  var_pop?: Maybe<Token_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Var_Samp_Fields>;
  variance?: Maybe<Token_Variance_Fields>;
};


/** aggregate fields of "token" */
export type Token_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Token_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Token_Avg_Fields = {
  __typename?: 'token_avg_fields';
  decimals?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "token". All fields are combined with a logical 'AND'. */
export type Token_Bool_Exp = {
  _and?: Maybe<Array<Token_Bool_Exp>>;
  _not?: Maybe<Token_Bool_Exp>;
  _or?: Maybe<Array<Token_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  decimals?: Maybe<Int_Comparison_Exp>;
  freeze_authority?: Maybe<String_Comparison_Exp>;
  mint_authority?: Maybe<String_Comparison_Exp>;
  token_accounts?: Maybe<Token_Account_Bool_Exp>;
  token_supply?: Maybe<Token_Supply_Bool_Exp>;
};

/** columns and relationships of "token_delegation" */
export type Token_Delegation = {
  __typename?: 'token_delegation';
  amount: Scalars['bigint'];
  delegate_address: Scalars['String'];
  source_address: Scalars['String'];
  /** An object relationship */
  source_token_account?: Maybe<Token_Account>;
};

/** aggregated selection of "token_delegation" */
export type Token_Delegation_Aggregate = {
  __typename?: 'token_delegation_aggregate';
  aggregate?: Maybe<Token_Delegation_Aggregate_Fields>;
  nodes: Array<Token_Delegation>;
};

/** aggregate fields of "token_delegation" */
export type Token_Delegation_Aggregate_Fields = {
  __typename?: 'token_delegation_aggregate_fields';
  avg?: Maybe<Token_Delegation_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Token_Delegation_Max_Fields>;
  min?: Maybe<Token_Delegation_Min_Fields>;
  stddev?: Maybe<Token_Delegation_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Delegation_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Delegation_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Delegation_Sum_Fields>;
  var_pop?: Maybe<Token_Delegation_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Delegation_Var_Samp_Fields>;
  variance?: Maybe<Token_Delegation_Variance_Fields>;
};


/** aggregate fields of "token_delegation" */
export type Token_Delegation_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Token_Delegation_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Token_Delegation_Avg_Fields = {
  __typename?: 'token_delegation_avg_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "token_delegation". All fields are combined with a logical 'AND'. */
export type Token_Delegation_Bool_Exp = {
  _and?: Maybe<Array<Token_Delegation_Bool_Exp>>;
  _not?: Maybe<Token_Delegation_Bool_Exp>;
  _or?: Maybe<Array<Token_Delegation_Bool_Exp>>;
  amount?: Maybe<Bigint_Comparison_Exp>;
  delegate_address?: Maybe<String_Comparison_Exp>;
  source_address?: Maybe<String_Comparison_Exp>;
  source_token_account?: Maybe<Token_Account_Bool_Exp>;
};

/** aggregate max on columns */
export type Token_Delegation_Max_Fields = {
  __typename?: 'token_delegation_max_fields';
  amount?: Maybe<Scalars['bigint']>;
  delegate_address?: Maybe<Scalars['String']>;
  source_address?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Token_Delegation_Min_Fields = {
  __typename?: 'token_delegation_min_fields';
  amount?: Maybe<Scalars['bigint']>;
  delegate_address?: Maybe<Scalars['String']>;
  source_address?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "token_delegation". */
export type Token_Delegation_Order_By = {
  amount?: Maybe<Order_By>;
  delegate_address?: Maybe<Order_By>;
  source_address?: Maybe<Order_By>;
  source_token_account?: Maybe<Token_Account_Order_By>;
};

/** select columns of table "token_delegation" */
export enum Token_Delegation_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  DelegateAddress = 'delegate_address',
  /** column name */
  SourceAddress = 'source_address'
}

/** aggregate stddev on columns */
export type Token_Delegation_Stddev_Fields = {
  __typename?: 'token_delegation_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Token_Delegation_Stddev_Pop_Fields = {
  __typename?: 'token_delegation_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Token_Delegation_Stddev_Samp_Fields = {
  __typename?: 'token_delegation_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Token_Delegation_Sum_Fields = {
  __typename?: 'token_delegation_sum_fields';
  amount?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Token_Delegation_Var_Pop_Fields = {
  __typename?: 'token_delegation_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Token_Delegation_Var_Samp_Fields = {
  __typename?: 'token_delegation_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Token_Delegation_Variance_Fields = {
  __typename?: 'token_delegation_variance_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Token_Max_Fields = {
  __typename?: 'token_max_fields';
  address?: Maybe<Scalars['String']>;
  decimals?: Maybe<Scalars['Int']>;
  freeze_authority?: Maybe<Scalars['String']>;
  mint_authority?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Token_Min_Fields = {
  __typename?: 'token_min_fields';
  address?: Maybe<Scalars['String']>;
  decimals?: Maybe<Scalars['Int']>;
  freeze_authority?: Maybe<Scalars['String']>;
  mint_authority?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "token". */
export type Token_Order_By = {
  address?: Maybe<Order_By>;
  decimals?: Maybe<Order_By>;
  freeze_authority?: Maybe<Order_By>;
  mint_authority?: Maybe<Order_By>;
  token_accounts_aggregate?: Maybe<Token_Account_Aggregate_Order_By>;
  token_supply?: Maybe<Token_Supply_Order_By>;
};

/** columns and relationships of "token_price" */
export type Token_Price = {
  __typename?: 'token_price';
  market_cap: Scalars['bigint'];
  price: Scalars['numeric'];
  timestamp: Scalars['timestamp'];
  /** An object relationship */
  token_unit: Token_Unit;
};

/** aggregated selection of "token_price" */
export type Token_Price_Aggregate = {
  __typename?: 'token_price_aggregate';
  aggregate?: Maybe<Token_Price_Aggregate_Fields>;
  nodes: Array<Token_Price>;
};

/** aggregate fields of "token_price" */
export type Token_Price_Aggregate_Fields = {
  __typename?: 'token_price_aggregate_fields';
  avg?: Maybe<Token_Price_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Token_Price_Max_Fields>;
  min?: Maybe<Token_Price_Min_Fields>;
  stddev?: Maybe<Token_Price_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Price_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Price_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Price_Sum_Fields>;
  var_pop?: Maybe<Token_Price_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Price_Var_Samp_Fields>;
  variance?: Maybe<Token_Price_Variance_Fields>;
};


/** aggregate fields of "token_price" */
export type Token_Price_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Token_Price_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Token_Price_Avg_Fields = {
  __typename?: 'token_price_avg_fields';
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "token_price". All fields are combined with a logical 'AND'. */
export type Token_Price_Bool_Exp = {
  _and?: Maybe<Array<Token_Price_Bool_Exp>>;
  _not?: Maybe<Token_Price_Bool_Exp>;
  _or?: Maybe<Array<Token_Price_Bool_Exp>>;
  market_cap?: Maybe<Bigint_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  timestamp?: Maybe<Timestamp_Comparison_Exp>;
  token_unit?: Maybe<Token_Unit_Bool_Exp>;
};

/** aggregate max on columns */
export type Token_Price_Max_Fields = {
  __typename?: 'token_price_max_fields';
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type Token_Price_Min_Fields = {
  __typename?: 'token_price_min_fields';
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['timestamp']>;
};

/** Ordering options when selecting data from "token_price". */
export type Token_Price_Order_By = {
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  token_unit?: Maybe<Token_Unit_Order_By>;
};

/** select columns of table "token_price" */
export enum Token_Price_Select_Column {
  /** column name */
  MarketCap = 'market_cap',
  /** column name */
  Price = 'price',
  /** column name */
  Timestamp = 'timestamp'
}

/** aggregate stddev on columns */
export type Token_Price_Stddev_Fields = {
  __typename?: 'token_price_stddev_fields';
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Token_Price_Stddev_Pop_Fields = {
  __typename?: 'token_price_stddev_pop_fields';
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Token_Price_Stddev_Samp_Fields = {
  __typename?: 'token_price_stddev_samp_fields';
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Token_Price_Sum_Fields = {
  __typename?: 'token_price_sum_fields';
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type Token_Price_Var_Pop_Fields = {
  __typename?: 'token_price_var_pop_fields';
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Token_Price_Var_Samp_Fields = {
  __typename?: 'token_price_var_samp_fields';
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Token_Price_Variance_Fields = {
  __typename?: 'token_price_variance_fields';
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** select columns of table "token" */
export enum Token_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Decimals = 'decimals',
  /** column name */
  FreezeAuthority = 'freeze_authority',
  /** column name */
  MintAuthority = 'mint_authority'
}

/** aggregate stddev on columns */
export type Token_Stddev_Fields = {
  __typename?: 'token_stddev_fields';
  decimals?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Token_Stddev_Pop_Fields = {
  __typename?: 'token_stddev_pop_fields';
  decimals?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Token_Stddev_Samp_Fields = {
  __typename?: 'token_stddev_samp_fields';
  decimals?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Token_Sum_Fields = {
  __typename?: 'token_sum_fields';
  decimals?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "token_supply" */
export type Token_Supply = {
  __typename?: 'token_supply';
  address: Scalars['String'];
  supply: Scalars['numeric'];
};

/** aggregated selection of "token_supply" */
export type Token_Supply_Aggregate = {
  __typename?: 'token_supply_aggregate';
  aggregate?: Maybe<Token_Supply_Aggregate_Fields>;
  nodes: Array<Token_Supply>;
};

/** aggregate fields of "token_supply" */
export type Token_Supply_Aggregate_Fields = {
  __typename?: 'token_supply_aggregate_fields';
  avg?: Maybe<Token_Supply_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Token_Supply_Max_Fields>;
  min?: Maybe<Token_Supply_Min_Fields>;
  stddev?: Maybe<Token_Supply_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Supply_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Supply_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Supply_Sum_Fields>;
  var_pop?: Maybe<Token_Supply_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Supply_Var_Samp_Fields>;
  variance?: Maybe<Token_Supply_Variance_Fields>;
};


/** aggregate fields of "token_supply" */
export type Token_Supply_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Token_Supply_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Token_Supply_Avg_Fields = {
  __typename?: 'token_supply_avg_fields';
  supply?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "token_supply". All fields are combined with a logical 'AND'. */
export type Token_Supply_Bool_Exp = {
  _and?: Maybe<Array<Token_Supply_Bool_Exp>>;
  _not?: Maybe<Token_Supply_Bool_Exp>;
  _or?: Maybe<Array<Token_Supply_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  supply?: Maybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Token_Supply_Max_Fields = {
  __typename?: 'token_supply_max_fields';
  address?: Maybe<Scalars['String']>;
  supply?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Token_Supply_Min_Fields = {
  __typename?: 'token_supply_min_fields';
  address?: Maybe<Scalars['String']>;
  supply?: Maybe<Scalars['numeric']>;
};

/** Ordering options when selecting data from "token_supply". */
export type Token_Supply_Order_By = {
  address?: Maybe<Order_By>;
  supply?: Maybe<Order_By>;
};

/** select columns of table "token_supply" */
export enum Token_Supply_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Supply = 'supply'
}

/** aggregate stddev on columns */
export type Token_Supply_Stddev_Fields = {
  __typename?: 'token_supply_stddev_fields';
  supply?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Token_Supply_Stddev_Pop_Fields = {
  __typename?: 'token_supply_stddev_pop_fields';
  supply?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Token_Supply_Stddev_Samp_Fields = {
  __typename?: 'token_supply_stddev_samp_fields';
  supply?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Token_Supply_Sum_Fields = {
  __typename?: 'token_supply_sum_fields';
  supply?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type Token_Supply_Var_Pop_Fields = {
  __typename?: 'token_supply_var_pop_fields';
  supply?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Token_Supply_Var_Samp_Fields = {
  __typename?: 'token_supply_var_samp_fields';
  supply?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Token_Supply_Variance_Fields = {
  __typename?: 'token_supply_variance_fields';
  supply?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "token_unit" */
export type Token_Unit = {
  __typename?: 'token_unit';
  address: Scalars['String'];
  /** An object relationship */
  token?: Maybe<Token>;
  /** An object relationship */
  token_price?: Maybe<Token_Price>;
  unit_name: Scalars['String'];
};

/** aggregated selection of "token_unit" */
export type Token_Unit_Aggregate = {
  __typename?: 'token_unit_aggregate';
  aggregate?: Maybe<Token_Unit_Aggregate_Fields>;
  nodes: Array<Token_Unit>;
};

/** aggregate fields of "token_unit" */
export type Token_Unit_Aggregate_Fields = {
  __typename?: 'token_unit_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Token_Unit_Max_Fields>;
  min?: Maybe<Token_Unit_Min_Fields>;
};


/** aggregate fields of "token_unit" */
export type Token_Unit_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Token_Unit_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "token_unit". All fields are combined with a logical 'AND'. */
export type Token_Unit_Bool_Exp = {
  _and?: Maybe<Array<Token_Unit_Bool_Exp>>;
  _not?: Maybe<Token_Unit_Bool_Exp>;
  _or?: Maybe<Array<Token_Unit_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  token?: Maybe<Token_Bool_Exp>;
  token_price?: Maybe<Token_Price_Bool_Exp>;
  unit_name?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Token_Unit_Max_Fields = {
  __typename?: 'token_unit_max_fields';
  address?: Maybe<Scalars['String']>;
  unit_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Token_Unit_Min_Fields = {
  __typename?: 'token_unit_min_fields';
  address?: Maybe<Scalars['String']>;
  unit_name?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "token_unit". */
export type Token_Unit_Order_By = {
  address?: Maybe<Order_By>;
  token?: Maybe<Token_Order_By>;
  token_price?: Maybe<Token_Price_Order_By>;
  unit_name?: Maybe<Order_By>;
};

/** select columns of table "token_unit" */
export enum Token_Unit_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  UnitName = 'unit_name'
}

/** aggregate var_pop on columns */
export type Token_Var_Pop_Fields = {
  __typename?: 'token_var_pop_fields';
  decimals?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Token_Var_Samp_Fields = {
  __typename?: 'token_var_samp_fields';
  decimals?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Token_Variance_Fields = {
  __typename?: 'token_variance_fields';
  decimals?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "transaction" */
export type Transaction = {
  __typename?: 'transaction';
  /** An object relationship */
  block: Block;
  error: Scalars['Boolean'];
  fee: Scalars['Int'];
  hash: Scalars['String'];
  logs?: Maybe<Scalars['_text']>;
  /** An array relationship */
  messages_by_transaction_hash: Array<Message>;
  /** An aggregate relationship */
  messages_by_transaction_hash_aggregate: Message_Aggregate;
  slot: Scalars['bigint'];
};


/** columns and relationships of "transaction" */
export type TransactionMessages_By_Transaction_HashArgs = {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionMessages_By_Transaction_Hash_AggregateArgs = {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};

/** aggregated selection of "transaction" */
export type Transaction_Aggregate = {
  __typename?: 'transaction_aggregate';
  aggregate?: Maybe<Transaction_Aggregate_Fields>;
  nodes: Array<Transaction>;
};

/** aggregate fields of "transaction" */
export type Transaction_Aggregate_Fields = {
  __typename?: 'transaction_aggregate_fields';
  avg?: Maybe<Transaction_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Transaction_Max_Fields>;
  min?: Maybe<Transaction_Min_Fields>;
  stddev?: Maybe<Transaction_Stddev_Fields>;
  stddev_pop?: Maybe<Transaction_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transaction_Stddev_Samp_Fields>;
  sum?: Maybe<Transaction_Sum_Fields>;
  var_pop?: Maybe<Transaction_Var_Pop_Fields>;
  var_samp?: Maybe<Transaction_Var_Samp_Fields>;
  variance?: Maybe<Transaction_Variance_Fields>;
};


/** aggregate fields of "transaction" */
export type Transaction_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Transaction_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "transaction" */
export type Transaction_Aggregate_Order_By = {
  avg?: Maybe<Transaction_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Transaction_Max_Order_By>;
  min?: Maybe<Transaction_Min_Order_By>;
  stddev?: Maybe<Transaction_Stddev_Order_By>;
  stddev_pop?: Maybe<Transaction_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Transaction_Stddev_Samp_Order_By>;
  sum?: Maybe<Transaction_Sum_Order_By>;
  var_pop?: Maybe<Transaction_Var_Pop_Order_By>;
  var_samp?: Maybe<Transaction_Var_Samp_Order_By>;
  variance?: Maybe<Transaction_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Transaction_Avg_Fields = {
  __typename?: 'transaction_avg_fields';
  fee?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "transaction" */
export type Transaction_Avg_Order_By = {
  fee?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transaction". All fields are combined with a logical 'AND'. */
export type Transaction_Bool_Exp = {
  _and?: Maybe<Array<Transaction_Bool_Exp>>;
  _not?: Maybe<Transaction_Bool_Exp>;
  _or?: Maybe<Array<Transaction_Bool_Exp>>;
  block?: Maybe<Block_Bool_Exp>;
  error?: Maybe<Boolean_Comparison_Exp>;
  fee?: Maybe<Int_Comparison_Exp>;
  hash?: Maybe<String_Comparison_Exp>;
  logs?: Maybe<_Text_Comparison_Exp>;
  messages_by_transaction_hash?: Maybe<Message_Bool_Exp>;
  slot?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Transaction_Max_Fields = {
  __typename?: 'transaction_max_fields';
  fee?: Maybe<Scalars['Int']>;
  hash?: Maybe<Scalars['String']>;
  slot?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "transaction" */
export type Transaction_Max_Order_By = {
  fee?: Maybe<Order_By>;
  hash?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Transaction_Min_Fields = {
  __typename?: 'transaction_min_fields';
  fee?: Maybe<Scalars['Int']>;
  hash?: Maybe<Scalars['String']>;
  slot?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "transaction" */
export type Transaction_Min_Order_By = {
  fee?: Maybe<Order_By>;
  hash?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "transaction". */
export type Transaction_Order_By = {
  block?: Maybe<Block_Order_By>;
  error?: Maybe<Order_By>;
  fee?: Maybe<Order_By>;
  hash?: Maybe<Order_By>;
  logs?: Maybe<Order_By>;
  messages_by_transaction_hash_aggregate?: Maybe<Message_Aggregate_Order_By>;
  slot?: Maybe<Order_By>;
};

/** select columns of table "transaction" */
export enum Transaction_Select_Column {
  /** column name */
  Error = 'error',
  /** column name */
  Fee = 'fee',
  /** column name */
  Hash = 'hash',
  /** column name */
  Logs = 'logs',
  /** column name */
  Slot = 'slot'
}

/** aggregate stddev on columns */
export type Transaction_Stddev_Fields = {
  __typename?: 'transaction_stddev_fields';
  fee?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "transaction" */
export type Transaction_Stddev_Order_By = {
  fee?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Stddev_Pop_Fields = {
  __typename?: 'transaction_stddev_pop_fields';
  fee?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "transaction" */
export type Transaction_Stddev_Pop_Order_By = {
  fee?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Stddev_Samp_Fields = {
  __typename?: 'transaction_stddev_samp_fields';
  fee?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "transaction" */
export type Transaction_Stddev_Samp_Order_By = {
  fee?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Transaction_Sum_Fields = {
  __typename?: 'transaction_sum_fields';
  fee?: Maybe<Scalars['Int']>;
  slot?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "transaction" */
export type Transaction_Sum_Order_By = {
  fee?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Transaction_Var_Pop_Fields = {
  __typename?: 'transaction_var_pop_fields';
  fee?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "transaction" */
export type Transaction_Var_Pop_Order_By = {
  fee?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transaction_Var_Samp_Fields = {
  __typename?: 'transaction_var_samp_fields';
  fee?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "transaction" */
export type Transaction_Var_Samp_Order_By = {
  fee?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Transaction_Variance_Fields = {
  __typename?: 'transaction_variance_fields';
  fee?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "transaction" */
export type Transaction_Variance_Order_By = {
  fee?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** columns and relationships of "validator_config" */
export type Validator_Config = {
  __typename?: 'validator_config';
  address: Scalars['String'];
  details: Scalars['String'];
  keybase_username: Scalars['String'];
  name: Scalars['String'];
  owner: Scalars['String'];
  website: Scalars['String'];
};

/** aggregated selection of "validator_config" */
export type Validator_Config_Aggregate = {
  __typename?: 'validator_config_aggregate';
  aggregate?: Maybe<Validator_Config_Aggregate_Fields>;
  nodes: Array<Validator_Config>;
};

/** aggregate fields of "validator_config" */
export type Validator_Config_Aggregate_Fields = {
  __typename?: 'validator_config_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Validator_Config_Max_Fields>;
  min?: Maybe<Validator_Config_Min_Fields>;
};


/** aggregate fields of "validator_config" */
export type Validator_Config_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Validator_Config_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "validator_config". All fields are combined with a logical 'AND'. */
export type Validator_Config_Bool_Exp = {
  _and?: Maybe<Array<Validator_Config_Bool_Exp>>;
  _not?: Maybe<Validator_Config_Bool_Exp>;
  _or?: Maybe<Array<Validator_Config_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  details?: Maybe<String_Comparison_Exp>;
  keybase_username?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  owner?: Maybe<String_Comparison_Exp>;
  website?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Validator_Config_Max_Fields = {
  __typename?: 'validator_config_max_fields';
  address?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  keybase_username?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Validator_Config_Min_Fields = {
  __typename?: 'validator_config_min_fields';
  address?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  keybase_username?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "validator_config". */
export type Validator_Config_Order_By = {
  address?: Maybe<Order_By>;
  details?: Maybe<Order_By>;
  keybase_username?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  website?: Maybe<Order_By>;
};

/** select columns of table "validator_config" */
export enum Validator_Config_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Details = 'details',
  /** column name */
  KeybaseUsername = 'keybase_username',
  /** column name */
  Name = 'name',
  /** column name */
  Owner = 'owner',
  /** column name */
  Website = 'website'
}

/** columns and relationships of "validator_status" */
export type Validator_Status = {
  __typename?: 'validator_status';
  activated_stake: Scalars['bigint'];
  active: Scalars['Boolean'];
  address: Scalars['String'];
  last_vote: Scalars['bigint'];
  root_slot: Scalars['bigint'];
  slot: Scalars['bigint'];
};

/** aggregated selection of "validator_status" */
export type Validator_Status_Aggregate = {
  __typename?: 'validator_status_aggregate';
  aggregate?: Maybe<Validator_Status_Aggregate_Fields>;
  nodes: Array<Validator_Status>;
};

/** aggregate fields of "validator_status" */
export type Validator_Status_Aggregate_Fields = {
  __typename?: 'validator_status_aggregate_fields';
  avg?: Maybe<Validator_Status_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Validator_Status_Max_Fields>;
  min?: Maybe<Validator_Status_Min_Fields>;
  stddev?: Maybe<Validator_Status_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Status_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Status_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Status_Sum_Fields>;
  var_pop?: Maybe<Validator_Status_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Status_Var_Samp_Fields>;
  variance?: Maybe<Validator_Status_Variance_Fields>;
};


/** aggregate fields of "validator_status" */
export type Validator_Status_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Validator_Status_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "validator_status" */
export type Validator_Status_Aggregate_Order_By = {
  avg?: Maybe<Validator_Status_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Validator_Status_Max_Order_By>;
  min?: Maybe<Validator_Status_Min_Order_By>;
  stddev?: Maybe<Validator_Status_Stddev_Order_By>;
  stddev_pop?: Maybe<Validator_Status_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Validator_Status_Stddev_Samp_Order_By>;
  sum?: Maybe<Validator_Status_Sum_Order_By>;
  var_pop?: Maybe<Validator_Status_Var_Pop_Order_By>;
  var_samp?: Maybe<Validator_Status_Var_Samp_Order_By>;
  variance?: Maybe<Validator_Status_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Validator_Status_Avg_Fields = {
  __typename?: 'validator_status_avg_fields';
  activated_stake?: Maybe<Scalars['Float']>;
  last_vote?: Maybe<Scalars['Float']>;
  root_slot?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "validator_status" */
export type Validator_Status_Avg_Order_By = {
  activated_stake?: Maybe<Order_By>;
  last_vote?: Maybe<Order_By>;
  root_slot?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_status". All fields are combined with a logical 'AND'. */
export type Validator_Status_Bool_Exp = {
  _and?: Maybe<Array<Validator_Status_Bool_Exp>>;
  _not?: Maybe<Validator_Status_Bool_Exp>;
  _or?: Maybe<Array<Validator_Status_Bool_Exp>>;
  activated_stake?: Maybe<Bigint_Comparison_Exp>;
  active?: Maybe<Boolean_Comparison_Exp>;
  address?: Maybe<String_Comparison_Exp>;
  last_vote?: Maybe<Bigint_Comparison_Exp>;
  root_slot?: Maybe<Bigint_Comparison_Exp>;
  slot?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Validator_Status_Max_Fields = {
  __typename?: 'validator_status_max_fields';
  activated_stake?: Maybe<Scalars['bigint']>;
  address?: Maybe<Scalars['String']>;
  last_vote?: Maybe<Scalars['bigint']>;
  root_slot?: Maybe<Scalars['bigint']>;
  slot?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "validator_status" */
export type Validator_Status_Max_Order_By = {
  activated_stake?: Maybe<Order_By>;
  address?: Maybe<Order_By>;
  last_vote?: Maybe<Order_By>;
  root_slot?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Status_Min_Fields = {
  __typename?: 'validator_status_min_fields';
  activated_stake?: Maybe<Scalars['bigint']>;
  address?: Maybe<Scalars['String']>;
  last_vote?: Maybe<Scalars['bigint']>;
  root_slot?: Maybe<Scalars['bigint']>;
  slot?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "validator_status" */
export type Validator_Status_Min_Order_By = {
  activated_stake?: Maybe<Order_By>;
  address?: Maybe<Order_By>;
  last_vote?: Maybe<Order_By>;
  root_slot?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "validator_status". */
export type Validator_Status_Order_By = {
  activated_stake?: Maybe<Order_By>;
  active?: Maybe<Order_By>;
  address?: Maybe<Order_By>;
  last_vote?: Maybe<Order_By>;
  root_slot?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** select columns of table "validator_status" */
export enum Validator_Status_Select_Column {
  /** column name */
  ActivatedStake = 'activated_stake',
  /** column name */
  Active = 'active',
  /** column name */
  Address = 'address',
  /** column name */
  LastVote = 'last_vote',
  /** column name */
  RootSlot = 'root_slot',
  /** column name */
  Slot = 'slot'
}

/** aggregate stddev on columns */
export type Validator_Status_Stddev_Fields = {
  __typename?: 'validator_status_stddev_fields';
  activated_stake?: Maybe<Scalars['Float']>;
  last_vote?: Maybe<Scalars['Float']>;
  root_slot?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "validator_status" */
export type Validator_Status_Stddev_Order_By = {
  activated_stake?: Maybe<Order_By>;
  last_vote?: Maybe<Order_By>;
  root_slot?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Status_Stddev_Pop_Fields = {
  __typename?: 'validator_status_stddev_pop_fields';
  activated_stake?: Maybe<Scalars['Float']>;
  last_vote?: Maybe<Scalars['Float']>;
  root_slot?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "validator_status" */
export type Validator_Status_Stddev_Pop_Order_By = {
  activated_stake?: Maybe<Order_By>;
  last_vote?: Maybe<Order_By>;
  root_slot?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Status_Stddev_Samp_Fields = {
  __typename?: 'validator_status_stddev_samp_fields';
  activated_stake?: Maybe<Scalars['Float']>;
  last_vote?: Maybe<Scalars['Float']>;
  root_slot?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "validator_status" */
export type Validator_Status_Stddev_Samp_Order_By = {
  activated_stake?: Maybe<Order_By>;
  last_vote?: Maybe<Order_By>;
  root_slot?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Validator_Status_Sum_Fields = {
  __typename?: 'validator_status_sum_fields';
  activated_stake?: Maybe<Scalars['bigint']>;
  last_vote?: Maybe<Scalars['bigint']>;
  root_slot?: Maybe<Scalars['bigint']>;
  slot?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "validator_status" */
export type Validator_Status_Sum_Order_By = {
  activated_stake?: Maybe<Order_By>;
  last_vote?: Maybe<Order_By>;
  root_slot?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Validator_Status_Var_Pop_Fields = {
  __typename?: 'validator_status_var_pop_fields';
  activated_stake?: Maybe<Scalars['Float']>;
  last_vote?: Maybe<Scalars['Float']>;
  root_slot?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "validator_status" */
export type Validator_Status_Var_Pop_Order_By = {
  activated_stake?: Maybe<Order_By>;
  last_vote?: Maybe<Order_By>;
  root_slot?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Status_Var_Samp_Fields = {
  __typename?: 'validator_status_var_samp_fields';
  activated_stake?: Maybe<Scalars['Float']>;
  last_vote?: Maybe<Scalars['Float']>;
  root_slot?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "validator_status" */
export type Validator_Status_Var_Samp_Order_By = {
  activated_stake?: Maybe<Order_By>;
  last_vote?: Maybe<Order_By>;
  root_slot?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Status_Variance_Fields = {
  __typename?: 'validator_status_variance_fields';
  activated_stake?: Maybe<Scalars['Float']>;
  last_vote?: Maybe<Scalars['Float']>;
  root_slot?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "validator_status" */
export type Validator_Status_Variance_Order_By = {
  activated_stake?: Maybe<Order_By>;
  last_vote?: Maybe<Order_By>;
  root_slot?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** columns and relationships of "vote_account" */
export type Vote_Account = {
  __typename?: 'vote_account';
  address: Scalars['String'];
  commission: Scalars['Int'];
  node: Scalars['String'];
  /** An object relationship */
  validator_config?: Maybe<Validator_Config>;
  /** An array relationship */
  validator_statuses: Array<Validator_Status>;
  /** An aggregate relationship */
  validator_statuses_aggregate: Validator_Status_Aggregate;
  voter: Scalars['String'];
  withdrawer: Scalars['String'];
};


/** columns and relationships of "vote_account" */
export type Vote_AccountValidator_StatusesArgs = {
  distinct_on?: Maybe<Array<Validator_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Status_Order_By>>;
  where?: Maybe<Validator_Status_Bool_Exp>;
};


/** columns and relationships of "vote_account" */
export type Vote_AccountValidator_Statuses_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Status_Order_By>>;
  where?: Maybe<Validator_Status_Bool_Exp>;
};

/** aggregated selection of "vote_account" */
export type Vote_Account_Aggregate = {
  __typename?: 'vote_account_aggregate';
  aggregate?: Maybe<Vote_Account_Aggregate_Fields>;
  nodes: Array<Vote_Account>;
};

/** aggregate fields of "vote_account" */
export type Vote_Account_Aggregate_Fields = {
  __typename?: 'vote_account_aggregate_fields';
  avg?: Maybe<Vote_Account_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vote_Account_Max_Fields>;
  min?: Maybe<Vote_Account_Min_Fields>;
  stddev?: Maybe<Vote_Account_Stddev_Fields>;
  stddev_pop?: Maybe<Vote_Account_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vote_Account_Stddev_Samp_Fields>;
  sum?: Maybe<Vote_Account_Sum_Fields>;
  var_pop?: Maybe<Vote_Account_Var_Pop_Fields>;
  var_samp?: Maybe<Vote_Account_Var_Samp_Fields>;
  variance?: Maybe<Vote_Account_Variance_Fields>;
};


/** aggregate fields of "vote_account" */
export type Vote_Account_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Vote_Account_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Vote_Account_Avg_Fields = {
  __typename?: 'vote_account_avg_fields';
  commission?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "vote_account". All fields are combined with a logical 'AND'. */
export type Vote_Account_Bool_Exp = {
  _and?: Maybe<Array<Vote_Account_Bool_Exp>>;
  _not?: Maybe<Vote_Account_Bool_Exp>;
  _or?: Maybe<Array<Vote_Account_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  commission?: Maybe<Int_Comparison_Exp>;
  node?: Maybe<String_Comparison_Exp>;
  validator_config?: Maybe<Validator_Config_Bool_Exp>;
  validator_statuses?: Maybe<Validator_Status_Bool_Exp>;
  voter?: Maybe<String_Comparison_Exp>;
  withdrawer?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Vote_Account_Max_Fields = {
  __typename?: 'vote_account_max_fields';
  address?: Maybe<Scalars['String']>;
  commission?: Maybe<Scalars['Int']>;
  node?: Maybe<Scalars['String']>;
  voter?: Maybe<Scalars['String']>;
  withdrawer?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Vote_Account_Min_Fields = {
  __typename?: 'vote_account_min_fields';
  address?: Maybe<Scalars['String']>;
  commission?: Maybe<Scalars['Int']>;
  node?: Maybe<Scalars['String']>;
  voter?: Maybe<Scalars['String']>;
  withdrawer?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "vote_account". */
export type Vote_Account_Order_By = {
  address?: Maybe<Order_By>;
  commission?: Maybe<Order_By>;
  node?: Maybe<Order_By>;
  validator_config?: Maybe<Validator_Config_Order_By>;
  validator_statuses_aggregate?: Maybe<Validator_Status_Aggregate_Order_By>;
  voter?: Maybe<Order_By>;
  withdrawer?: Maybe<Order_By>;
};

/** select columns of table "vote_account" */
export enum Vote_Account_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Commission = 'commission',
  /** column name */
  Node = 'node',
  /** column name */
  Voter = 'voter',
  /** column name */
  Withdrawer = 'withdrawer'
}

/** aggregate stddev on columns */
export type Vote_Account_Stddev_Fields = {
  __typename?: 'vote_account_stddev_fields';
  commission?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Vote_Account_Stddev_Pop_Fields = {
  __typename?: 'vote_account_stddev_pop_fields';
  commission?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Vote_Account_Stddev_Samp_Fields = {
  __typename?: 'vote_account_stddev_samp_fields';
  commission?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Vote_Account_Sum_Fields = {
  __typename?: 'vote_account_sum_fields';
  commission?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Vote_Account_Var_Pop_Fields = {
  __typename?: 'vote_account_var_pop_fields';
  commission?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Vote_Account_Var_Samp_Fields = {
  __typename?: 'vote_account_var_samp_fields';
  commission?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Vote_Account_Variance_Fields = {
  __typename?: 'vote_account_variance_fields';
  commission?: Maybe<Scalars['Float']>;
};

export type LatestBlockHeightListenerSubscriptionVariables = Exact<{
  offset?: Maybe<Scalars['Int']>;
}>;


export type LatestBlockHeightListenerSubscription = { height: Array<(
    { __typename?: 'block' }
    & Pick<Block, 'slot'>
  )> };

export type LatestBlockTimestampQueryVariables = Exact<{
  offset?: Maybe<Scalars['Int']>;
}>;


export type LatestBlockTimestampQuery = { block: Array<(
    { __typename?: 'block' }
    & Pick<Block, 'timestamp'>
  )> };


export const LatestBlockHeightListenerDocument = gql`
    subscription LatestBlockHeightListener($offset: Int = 0) {
  height: block(order_by: {slot: desc}, limit: 1, offset: $offset) {
    slot
  }
}
    `;

/**
 * __useLatestBlockHeightListenerSubscription__
 *
 * To run a query within a React component, call `useLatestBlockHeightListenerSubscription` and pass it any options that fit your needs.
 * When your component renders, `useLatestBlockHeightListenerSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestBlockHeightListenerSubscription({
 *   variables: {
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useLatestBlockHeightListenerSubscription(baseOptions?: Apollo.SubscriptionHookOptions<LatestBlockHeightListenerSubscription, LatestBlockHeightListenerSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<LatestBlockHeightListenerSubscription, LatestBlockHeightListenerSubscriptionVariables>(LatestBlockHeightListenerDocument, options);
      }
export type LatestBlockHeightListenerSubscriptionHookResult = ReturnType<typeof useLatestBlockHeightListenerSubscription>;
export type LatestBlockHeightListenerSubscriptionResult = Apollo.SubscriptionResult<LatestBlockHeightListenerSubscription>;
export const LatestBlockTimestampDocument = gql`
    query LatestBlockTimestamp($offset: Int = 0) {
  block: block(order_by: {height: desc}, limit: 1, offset: $offset) {
    timestamp
  }
}
    `;

/**
 * __useLatestBlockTimestampQuery__
 *
 * To run a query within a React component, call `useLatestBlockTimestampQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestBlockTimestampQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestBlockTimestampQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useLatestBlockTimestampQuery(baseOptions?: Apollo.QueryHookOptions<LatestBlockTimestampQuery, LatestBlockTimestampQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LatestBlockTimestampQuery, LatestBlockTimestampQueryVariables>(LatestBlockTimestampDocument, options);
      }
export function useLatestBlockTimestampLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LatestBlockTimestampQuery, LatestBlockTimestampQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LatestBlockTimestampQuery, LatestBlockTimestampQueryVariables>(LatestBlockTimestampDocument, options);
        }
export type LatestBlockTimestampQueryHookResult = ReturnType<typeof useLatestBlockTimestampQuery>;
export type LatestBlockTimestampLazyQueryHookResult = ReturnType<typeof useLatestBlockTimestampLazyQuery>;
export type LatestBlockTimestampQueryResult = Apollo.QueryResult<LatestBlockTimestampQuery, LatestBlockTimestampQueryVariables>;