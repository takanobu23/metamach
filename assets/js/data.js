//[1]データの取得方法--------------------------------------
//getvalue()というファンクションを作成
//値を取得し、obj_enに挿入されていきます。
//それぞれのhtmlの入力欄にoninput()で起動するようにしました
//①「希望のカテゴリ選択」と②「Pickup関連」のところだけ取得方法を変えています。(①は配列、② は辞書型)
//[1-1]それぞれの取得方法

  //①
  //addvalue() 配列に値を入れていくだけ

  //②
  //PICK UP掲載申請の場合   pickup_add_publish()
  //PICK UPオファー申請の場合 pickup_add_offer()
  //両方の場合は二つとも値が入力される

//[2]データの格納場所--------------------------------------
//日本語版の方はobj2に入っています。(日本語を想定していなかったため。すみませんでした)
//obj_enの中の値をobj2に移しているだけです



//希望のカテゴリ選択のとこ
let match_list = []

//PICK UP関連申請
//PICK UPオファー申請
let offer={}
//PICK UP掲載申請
let publish = {}

//元データ
obj_en = {
  name:"",
  mail:"",
  tel:"",
  company:"",
  category:"",
  sns:"",
  user:"",
  content:"",
  match_category:match_list,
  material:"",
  service:"",
  tieup:"",
  other:"",
  pickup_publish:publish,
  pickup_offer:offer
};

//日本語データ
obj2 = {
};




//テキスト情報の取得
let getvalue = (id,value)=>{
  obj_en[document.getElementById(`${id}`).name] = value
  obj2['名前'] = obj_en.name;
  obj2['メールアドレス'] = obj_en.mail;
  obj2['電話番号'] = obj_en.tel;
  obj2['会社'] = obj_en.company;
  obj2['希望カテゴリー'] = obj_en.category;
  obj2['SNS'] = obj_en.sns;
  obj2['ユーザー名'] = obj_en.user;
  obj2['内容'] = obj_en.content;
  obj2['サービス'] = obj_en.service;
  obj2['タイアップ'] = obj_en.tieup;
  obj2['その他'] = obj_en.other;
  obj2['希望マッチカテゴリー'] = obj_en.match_category;
  obj2['Pickup_オファー'] = offer;
  obj2['Pickup_掲載'] = publish;
} 

//希望のカテゴリ選択のデータ取得
let addvalue = (id,value)=>{
    document.getElementById(`${id}`).classList.toggle("active")
    if (document.getElementById(`${id}`).classList.contains("active")){
      match_list.push(value)
    } else {
      let index = match_list.indexOf(value)
      match_list.splice(index, 1);
    }
    obj2['希望マッチカテゴリー'] = obj_en.match_category;
  return match_list
}
//最後のpickup関連のとこのやつ
//オファー
let pickup_add_offer = (name,value)=> {
  offer[`${name}`] = value
  console.log(name)
  console.log(publish)
  obj2['Pickup_掲載'] = publish;
  obj2['Pickup_オファー'] = offer;
  console.log(offer)
}
//掲載
let pickup_add_publish = (name,value) => {
  console.log(name)
  publish[`${name}`] = value
  console.log(publish)
  obj2['Pickup_オファー'] = offer;
  obj2['Pickup_掲載'] = publish;
  console.log(offer)
}

//重複の対処処理
let delete_offer_value = (id1,id2,id3) => {
  //テキストの消去
  document.getElementById(`${id1}`).value = "";
  document.getElementById(`${id2}`).value = "";
  document.getElementById(`${id3}`).value = "";
  //データの方の削除
  offer[document.getElementById(`${id1}`).name] = "";
  offer[document.getElementById(`${id2}`).name] = "";
  offer[document.getElementById(`${id3}`).name] = "";
}

let delete_publish_value = (id1,id2) => {
  //テキストの消去
  document.getElementById(`${id1}`).value = "";
  document.getElementById(`${id2}`).value = "";
  //データの方の削除
  publish[document.getElementById(`${id1}`).name] = "";
  publish[document.getElementById(`${id2}`).name]= "";
}




//送信
///// Eメールの送信処理

   const submit_btn = (id)=> {
      $(`#${id}`).on("click", function(){
        console.log("送信")
        let data = obj2;

        $.ajax({
          url:           '[作成したAPIのURL]',
          type:          'post',
          dataType:      'json',
          contentType:   'application/json',
          scriptCharset: 'utf-8',
          data:          JSON.stringify(data)
        })
        .then(
          function (data) {
            ///// 送信成功時の処理
            alert('送信に成功しました');
            location.reload();
          },
          function (data) {
            ///// 送信失敗時の処理
            alert('送信に失敗しました');
            location.reload();
        });    
      })
    }