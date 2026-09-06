async function tripleAfterOneSecond(number) {

  await new Promise((resolve) => setTimeout(resolve, 1000));
  return number * 3;
}

async function main() {
  const inputNum = 7;
  console.log(`Bắt đầu tính với số đầu vào = ${inputNum}, vui lòng đợi 1 giây...`);

  const result = await tripleAfterOneSecond(inputNum);
  console.log(`Kết quả: ${inputNum} × 3 = ${result}`);
}

main();
