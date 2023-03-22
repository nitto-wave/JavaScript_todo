import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompreteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("imcomplete-lists").removeChild(target);
};
// 未完了リストに追加する関数
const createIncompreteList = (text) => {
  // liタグ生成
  const list = document.createElement("li");
  list.className = "flex";

  // divタグ生成
  const lists = document.createElement("div");
  lists.innerText = text;

  // button（完了）ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    //　完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODOテキスト内容を取得
    const text = addTarget.firstElementChild.innerText;

    // flexクラス要素を初期化
    addTarget.textContent = null;

    // divタグ生成
    const li = document.createElement("div");
    li.innerText = text;

    // buttonタグ戻す生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグdivを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-lists").removeChild(deleteTarget);

      // text取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompreteList(text);
    });
    // flexクラスの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-lists").appendChild(addTarget);
  });

  // button（削除）ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  list.appendChild(lists);
  list.appendChild(completeButton);
  list.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("imcomplete-lists").appendChild(list);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
