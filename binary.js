function findSock(sortedLaundry) {
    let start = 0;
    let end = sortedLaundry.length;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (sortedLaundry[mid] === "sock") return "sock";
  
      if (sortedLaundry[mid] < "sock") {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }