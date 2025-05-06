// タスクを入力するためのインプットフォーム、タスクを登録するためのボタン、さらにタスクを表示させるための空のリストをそれぞれ取得
const taskValue = document.getElementsByClassName('task_value')[0]; /* [0]→最初の1個目だけを取る */
const taskSubmit = document.getElementsByClassName('task_submit')[0];
const taskList = document.getElementsByClassName('task_list')[0];

// タスクを追加する関数
const addTasks = (task) => {
    // 入力したタスクを追加・表示
    const listItem = document.createElement('li'); /* <li>タグを新規作成 */
    const showItem = taskList.appendChild(listItem); /* appendChild() は親要素に子要素を追加する関数 */
    showItem.innerHTML = task;

    // タスクに削除ボタンを付与
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    listItem.appendChild(deleteButton);

    // 削除ボタンをクリックし、イベントを発動（タスクが削除）
    deleteButton.addEventListener('click', evt => {
        evt.preventDefault(); /* デフォルトの動作をキャンセル */
        deleteTasks(deleteButton);
    });
};

// 削除ボタンにタスクを消すための機能を付与
const deleteTasks = (deleteButton) => {
    const chosenTask = deleteButton.closest('li'); /* closest('li') は、「自分自身から一番近い親要素の <li>」を探すメソッド */
    taskList.removeChild(chosenTask); /* removeChild()→そのタスクをリストから削除 */
};

// 追加ボタンにイベントを付与
taskSubmit.addEventListener('click', evt => {
    evt.preventDefault(); /* ページがリロードされず、タスクの追加だけが実行 */
    const task = taskValue.value.trim(); /* taskValue.value→入力されたテキストを取得 */

    if (task === '') {
        alert('タスクを入力してください！');
        return; /* 空の場合は処理を中断 */
    }

    addTasks(task);
    taskValue.value = ''; /* テキストボックスを空に */
});

// Enterキーで追加
taskValue.addEventListener('keydown', evt => {
    if (evt.key === 'Enter') {
        evt.preventDefault();
        const task = taskValue.value.trim();
        if (task === '') {
            alert('タスクを入力してください！');
            return;
        }
        addTasks(task);
        taskValue.value = '';
    }
});
