export interface IPaypalOptions {
  clientId: string;
  clientSecret: string;
  sandbox?: boolean;
}

export interface IPaypalPayload {
  intent: "CAPTURE";
  purchase_units: {
    items: {
      name: string;
      description: string;
      quantity: number;
      unit_amount: {
        currency_code: "USD" | "EUR";
        value: string;
      };
    }[];

    amount: {
      currency_code: "USD" | "EUR";
      value: string;
      breakdown: {
        item_total: {
          currency_code: "USD" | "EUR";
          value: string;
        };
      };
    };
  }[];
  application_context: {
    return_url: string;
    cancel_url: string;
    shipping_preference?: "NO_SHIPPING";
    user_action?: "PAY_NOW";
    brand_name?: string;
  };
}

export interface IPaypalAuthResponse {
  access_token: string;
  token_type: string;
  app_id: string;
  expires_in: number;
  nonce: string;
  scope: string;
}

export interface IPayPalOrderResponse {
  id: string;
  status: string;
  links: {
    href: string;
    rel: string;
    method: string;
  }[];
}
