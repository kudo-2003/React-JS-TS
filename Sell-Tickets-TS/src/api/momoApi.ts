export const momoPayment = async (amount: number) => {
    const response = await fetch("https://test-payment.momo.vn/v2/gateway/api/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        partnerCode: "MOMO",
        accessKey: "F8BBA842ECF85",
        secretKey: "K951B6PE1waDMi640xX08PD3vg6EkVlz",
        requestId: `${Date.now()}`,
        amount: amount.toString(),
        orderId: `${Date.now()}`,
        orderInfo: "Thanh toán vé xe",
        returnUrl: "http://localhost:3000/payment-success",
        notifyUrl: "http://localhost:3000/payment-notify",
        extraData: "",
      }),
    });
  
    return response.json();
  };