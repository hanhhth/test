type PaymentMethod = "VIETQR" | "DOMESTIC_CARD" | "INTERNATIONAL_CARD" | "E_WALLET";

interface IpnPayload {
  orderId: string;
  method: PaymentMethod;
  amount: number;
  isChecksumValid: boolean; // Kết quả xác thực chữ ký số
  processed: boolean;
}

const ipnQueue: IpnPayload[] = [
  { orderId: "ORD_101", method: "VIETQR", amount: 350000, isChecksumValid: true, processed: false },
  { orderId: "ORD_102", method: "DOMESTIC_CARD", amount: 1200000, isChecksumValid: false, processed: false },
  { orderId: "ORD_103", method: "VIETQR", amount: 800000, isChecksumValid: true, processed: false },
  { orderId: "ORD_104", method: "INTERNATIONAL_CARD", amount: 4500000, isChecksumValid: true, processed: false },
  { orderId: "ORD_105", method: "VIETQR", amount: 150000, isChecksumValid: false, processed: false },
];


let validVietQrOrders: string[] =[];
let totalVietQrAmount: number = 0 

for (let i = 0; i < ipnQueue.length; i++) {
  const item = ipnQueue[i];

if (item.isChecksumValid === true && item.method ==="VIETQR" ) {
    validVietQrOrders.push(item.orderId);
    totalVietQrAmount += item.amount;    
    item.processed = true;
}
console.log("Danh sách mã VIETQR :", validVietQrOrders);
console.log("Tổng số tiền:", totalVietQrAmount);
}