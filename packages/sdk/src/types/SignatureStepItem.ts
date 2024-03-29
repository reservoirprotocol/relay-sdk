import type { Execute } from './Execute.js'

export type SignatureStepItem = Pick<
  NonNullable<Execute['steps'][0]['items']>[0],
  'status' | 'orderIds' | 'orderIndexes' | 'orderData'
> & {
  data?: {
    sign?: {
      signatureKind: 'eip191' | 'eip712'
    } & {
      //Available if eip191
      domain: any
      types: any
      primaryType: string
      value?: any
    } & {
      //Available is eip712
      message: string
    }
    post?: {
      body: any
      method: string
      endpoint: string
    }
  }
}
