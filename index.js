var left_arrow=document.getElementById('left_arrow');
var right_arrow=document.getElementById('right_arrow');

var list_of_tables=[];

list_of_tables.push(document.getElementById('detail_1'));
list_of_tables.push(document.getElementById('detail_2'));
list_of_tables.push(document.getElementById('detail_3'));
list_of_tables.push(document.getElementById('detail_4'));
// var id=0;
var index=0;
var temp;
var temp2;
function dummy(){
}

left_arrow.onclick=function(){

    temp=1;
    for(var i=0;i<100;i++){
      temp-=0.01;
      list_of_tables[index].style.opacity=toString(temp);
      setTimeout(dummy,200)
    }
    temp2=index+1;
    document.getElementById('info_'+temp2).style.transform="scale(1)";
    list_of_tables[index].style.opacity="0";
    list_of_tables[index].style.zIndex="2";
    index=(index-1+4)%4;
    temp=0;
    for(var i=0;i<100;i++){
      temp+=0.01
      list_of_tables[index].style.opacity=toString(temp);
      setTimeout(dummy,200)
    }
    list_of_tables[index].style.opacity="1";
    list_of_tables[index].style.zIndex="3";
    temp2=index+1;
    document.getElementById('info_'+temp2).style.transform="scale(1.3)";
};

right_arrow.onclick=function(){

    temp=1;
    for(var i=0;i<100;i++){
      temp-=0.01
      list_of_tables[index].style.opacity=toString(temp);
      setTimeout(dummy,200)
    }
    list_of_tables[index].style.opacity="0";
    list_of_tables[index].style.zIndex="2";
    temp2=index+1;
    document.getElementById('info_'+temp2).style.transform="scale(1)";
    index=(index+1)%4;
    temp=0;
    for(var i=0;i<100;i++){
      temp+=0.01
      list_of_tables[index].style.opacity=toString(temp);
      setTimeout(dummy,200)
    }
    list_of_tables[index].style.opacity="1";
    list_of_tables[index].style.zIndex="3";
    temp2=index+1;
    document.getElementById('info_'+temp2).style.transform="scale(1.3)";
};
