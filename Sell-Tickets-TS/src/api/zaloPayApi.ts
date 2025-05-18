export const zaloPayPayment = async (amount: number) => {
    const response = await fetch("https://sandbox.zalopay.vn/v001/tpe/createorder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        app_id: "YOUR_ZALOPAY_APP_ID",
        app_user: "user123",
        app_time: Date.now(),
        amount: amount,
        description: "Thanh toán vé xe",
        bank_code: "zalopayapp",
        item: JSON.stringify([{ name: "Vé xe", quantity: 1, price: amount }]),
        embed_data: JSON.stringify({}),
        callback_url: "http://localhost:3000/payment-success",
      }),
    });
  
    return response.json();
  };