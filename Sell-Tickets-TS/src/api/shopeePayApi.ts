export const shopeePayPayment = async (amount: number) => {
    const response = await fetch("https://api.shopeepay.vn/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        partnerCode: "SHOPEEPAY",
        accessKey: "YOUR_SHOPEEPAY_ACCESS_KEY",
        secretKey: "YOUR_SHOPEEPAY_SECRET_KEY",
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