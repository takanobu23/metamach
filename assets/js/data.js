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

var albumBucketName = "metamach-file";
var bucketRegion = "ap-northeast-1";
var IdentityPoolId = "ap-northeast-1:31c1a37f-c12a-4ee6-89e0-e7d6f5d8e6ec";

AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: IdentityPoolId
  })
});

var s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: {
      Bucket: albumBucketName
  }
});

var now = new Date();



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
  return obj2

} 
let  mail_obj = "";
mail_obj = {
  "name": obj_en.name,
  "mail": obj_en.mail,
  "tell": obj_en.tel,
}

let Origin_NFT_URL = "metamach";
let encoded_URL = encodeURIComponent(Origin_NFT_URL) + "/" + obj_en.name.replace(/[\"]/g, "")+now.getFullYear()+(now.getMonth()+1) + now.getDate()+"_"+now.getTime()+ "/" ;



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
  return match_list,obj2

}
//最後のpickup関連のとこのやつ
//オファー
let pickup_add_offer = (name,value)=> {
  offer[`${name}`] = value
  obj2['Pickup_掲載'] = publish;
  obj2['Pickup_オファー'] = offer;
  return obj2,offer
}
//掲載
let pickup_add_publish = (name,value) => {
  publish[`${name}`] = value
  obj2['Pickup_オファー'] = offer;
  obj2['Pickup_掲載'] = publish;
  return obj2, offer
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

  pickup1_offer_money = null;
  pickup1_offer_category = null;
  pickup2_desired_name = null;
  pickup2_supposed_collaboration = null;
  pickup2_other = null;
}

//csv用データ
let pickup1_offer_money;
let pickup1_offer_category;

let pickup2_desired_name;
let pickup2_supposed_collaboration;
let pickup2_other;

//掲載申請
document.getElementById('pickup_publish').addEventListener('input',()=>{
  pickup1_offer_money = document.getElementById('pickup_publish').value
  console.log(pickup1_offer_money)
})
document.getElementById('pickup_publish_cat').addEventListener('input',()=>{
  pickup1_offer_category = document.getElementById('pickup_publish_cat').value
})
//オファー申請
document.getElementById('hoping_offer_name').addEventListener('input',()=>{
  pickup2_desired_name = document.getElementById('hoping_offer_name').value
})
document.getElementById('hoping_content').addEventListener('input',()=>{
  pickup2_supposed_collaboration = document.getElementById('hoping_content').value
})
document.getElementById('hoping_other').addEventListener('input',()=>{
  pickup2_other = document.getElementById('hoping_other').value
})
//両方
document.getElementById('contact_price').addEventListener('input',()=>{
  pickup1_offer_money = document.getElementById('contact_price').value
})
document.getElementById('contact_category').addEventListener('input',()=>{
  pickup1_offer_category = document.getElementById('contact_category').value
})
document.getElementById('hoping_offer_name2').addEventListener('input',()=>{
  pickup2_desired_name = document.getElementById('hoping_offer_name2').value
})
document.getElementById('hoping_content2').addEventListener('input',()=>{
  pickup2_supposed_collaboration = document.getElementById('hoping_content2').value
})
document.getElementById('hoping_other2').addEventListener('input',()=>{
  pickup2_other = document.getElementById('hoping_other2').value
})



let csv_obj = [obj_en.name,obj_en.mail,obj_en.tel,obj_en.company,obj_en.category,obj_en.sns,obj_en.user,obj_en.content,obj_en.service,obj_en.tieup,obj_en.other,obj_en.match_category,pickup1_offer_money,pickup1_offer_category,pickup2_desired_name,pickup2_supposed_collaboration,pickup2_other]


//送信
///// Eメールの送信処理

   const submit_btn = (id)=> {
    match_list = match_list.join(';')

    csv_obj = [obj_en.name,
      obj_en.mail,
      obj_en.tel,
      obj_en.company,
      obj_en.category,
      obj_en.sns,
      obj_en.user,
      obj_en.content,
      obj_en.service,
      obj_en.tieup,
      obj_en.other,
      match_list,
      pickup1_offer_money,
      pickup1_offer_category,
      pickup2_desired_name,
      pickup2_supposed_collaboration,
      pickup2_other]
    
    console.log(csv_obj)
      $(`#${id}`).on("click", function(){

        //入力データの更新
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

        mail_obj = {
          "set_name": obj_en.name,
          "set_mail": obj_en.mail,
          "set_tell": obj_en.tel,
        }
        
       
        let data = csv_obj;
        let data_en = mail_obj;
         ///// 送信成功時の処理
         var blob = new Blob([JSON.stringify(data, null, 2)], {
          type: 'text/plain'
        });

        console.log(data_en)
        $.ajax({
          url:  'https://qyygvkr3uc.execute-api.ap-northeast-1.amazonaws.com/v1/sendmail',
          type: 'post',
          dataType: 'json',
          contentType: 'application/json',
          scriptCharset: 'utf-8',
          data: JSON.stringify(data_en)
      }).then(
        function (data_en) {
          ///// 送信成功時の処理
          alert('メールの送信に成功しました');
        },
        function (data_en) {
          ///// 送信失敗時の処理
          alert('送信に失敗しました');
      });   
           
            
            s3.putObject({
              Key: encoded_URL+ obj_en.name.replace(/[\"]/g, "")+".csv", 
              ContentType: "text/csv",
              Body: blob
              }, function (err, data) {
                if (data !== null) {
                    alert("登録が完了いたしました。");
                } else {
                    alert("エラー: " + err.message);
                }
            })
       

        //   const submit_error =  (data)=> {
        //     ///// 送信失敗時の処理
        //     if (data !== null) {;
        //     } else {
        //         alert("エラー: " + err.message);
        //         location.href = reload()
        //     }
        //     alert('送信に失敗しました');
        //     location.reload();
        // };    
      }
      )
    }
    

