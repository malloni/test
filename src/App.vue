<template>
  <div>
    <router-view/>
  </div>
</template>

<style>
*{
  font-family: Roboto;
  box-sizing: border-box;
}

h1 {
  font-style: normal;
  font-weight: 300;
  color: #003358;
  font-size: 52px;
  margin: 32px 0;
}

p {  
  font-style: normal;
  color: #585858;
  font-size: 18px;
  line-height: 32px;
}

p>span.mark{
  background: #EFEFEF;
  border-radius: 8px;
  border: 1px solid #BEBEBE;
  padding: 5px;
}
</style>
