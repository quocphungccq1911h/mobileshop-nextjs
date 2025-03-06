import { Cart, Connection, MobileShopCart } from "./type";

const domain = process.env.

type ExtractVariables<T> = T extends { variables: object }
  ? T["variables"]
  : never;

const removeEdgesAndNodes = <T>(array: Connection<T>): T[] => {
  return array.edges.map(edge => edge.node);
};

const reshapeCart = (cart: MobileShopCart): Cart => {
  if (!cart.cost?.totalAmount) {
    cart.cost.totalAmount = {
      amount: "0.0",
      currencyCode: cart.cost.totalAmount.currencyCode,
    };
  }
  return {
    ...cart,
    lines: removeEdgesAndNodes(cart.lines),
  };
};

export async function mobileShopFetch<T>({
  headers,
  query,
  variables,
}: {
  headers?: HeadersInit;
  query: string;
  variables?: ExtractVariables<T>;
}): Promise<{ status: number; body: T } | never> {
  try {
  } catch (error) {}
}

export async function getCart(): Promise<Cart | undefined> {}
