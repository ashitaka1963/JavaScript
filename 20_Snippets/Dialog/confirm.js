// OKボタンをクリック
// 戻り値は「true」

// キャンセルボタンをクリック
// 戻りは「false」

if (window.confirm("Do you really want to leave?")) {
  console.log("OKが押されました");
}else{
  console.log("キャンセルが押されました");
}