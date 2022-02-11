/* Fill your code*/

class Blog{
    constructor(title,detail){
         this.title = title;
         this.detail = detail;
    }

    addTitle(){
        var title_card = document.createElement('h1');
        title_card.setAttribute("id","blog-title");
        console.log(title_card);
        document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML += this.title;
    }
    addDescription(){
        let des_card= document.createElement('p');
        des_card.setAttribute('id',"blog-description");
        console.log(des_card);
        document.getElementById('card-text').appendChild(des_card);
        des_card.innerHTML += this.detail;
    }

}

document.getElementById('addBlog').addEventListener('click',()=>{
    let a = document.getElementById('popupContact');
    a.style.display = 'block';
})

document.getElementById('close').addEventListener('click',()=>{
    let a = document.getElementById('popupContact');
    a.style.display = 'none';
})
document.getElementById('post').addEventListener('click',()=>
{
  

  val1 = document.getElementById('title').value; 
  val2 = document.getElementById('detail').value;
  let a = document.getElementById('popupContact');
  a.style.display = 'none';
  let blog = new Blog(val1,val2);
  blog.addTitle();
  blog.addDescription();

//   let img = document.createElement('img');
//   img.src = './assets/javascript.png';
//   document.getElementById('flashcard').appendChild(img);
})