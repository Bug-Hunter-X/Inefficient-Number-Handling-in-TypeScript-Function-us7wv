function printNumber(num: number): void {
  if (num < 0) {
    throw new Error('Number must be non-negative');
  } else {
    switch (num) {
      case 0:
        console.log('Zero');
        break;
      case 1:
        console.log('One');
        break;
      case 2:
        console.log('Two');
        break;
      default:
        console.log(num);
    }
  }
}

