// Дано
const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;
//

// Решение
function merge(nums1, m, nums2, n){
    let i=m-1
    let j=n-1
    let q=m+n-1

    while (i>=0 && j>=0){
        if(nums1[i]>nums2[j]){
            nums1[q]=nums1[i]
            i--
        }
        else{
            nums1[q]=nums2[j]
            j--
        }
        q--
    }

    while(j>=0){
        nums1[q]=nums2[j]
        j--
        q--
    }
}
//

(merge(nums1, m, nums2, n)); // -> после выполнения функции nums1 === [1,2,2,3,5,6]

console.log(nums1) // для запуста в консоли использовал node index.js