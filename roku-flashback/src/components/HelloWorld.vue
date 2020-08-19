<template>
  <div class="hello">
    <div
      class="alert alert-success alert-dismissible fade show col-6 m-auto"
      role="alert"
      style="box-shadow: 0 0 5px 0px rgba(0,0,0,0.2); background-color:rgba(139, 255, 7, 0.8); border:1.5px solid rgb(139, 255, 7);"
    >
      <h1 style="color:black;">This is Home now</h1>
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div
      class="alert alert-success alert-dismissible fade show col-12 col-lg-5 ml-auto mr-auto mt-3"
      role="alert"
      style="box-shadow: 0 0 5px 0px rgba(0,0,0,0.2); background-color:rgba(255,198,0, 0.9); border:1.5px solid #ffc600; color:#000;"
    >
      <h5 style="color:black;">
        Soon to be made awesome by: <br />
        <b style="font-size:24px; line-height:3; color:black;" class="pt-2"
          >Jeffrey Helder | Just Some Guy</b
        >
      </h5>
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <p>
      if this is still visable this app is still crap.
    </p>
    <h3>Some Fake Links</h3>
    <ul>
      <li>
        <a href="" target="_blank" rel="noopener">nothing</a>
      </li>
      <li>
        <a href="" target="_blank" rel="noopener">empty</a>
      </li>
      <li>
        <a href="" target="_blank" rel="noopener">blank</a>
      </li>
    </ul>
    <h3>I'm Bored</h3>
    <ul>
      <li>
        <a href="" target="_blank" rel="noopener">bored</a>
      </li>
      <li>
        <a href="" target="_blank" rel="noopener">bored</a>
      </li>
      <li>
        <a href="" target="_blank" rel="noopener">bored</a>
      </li>
      <li>
        <a href="" target="_blank" rel="noopener">bored</a>
      </li>
      <li>
        <a href="" target="_blank" rel="noopener">bored</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  margin-top: 66px;
  width: 100%;
  height: calc(100vh - 66px);
  padding: 100px 0;
  background-color: rgb(63, 63, 63);
  @media screen and (max-width: 743px) {
    height: calc(100vh - 116px);
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: aqua;
}
* {
  color: white;
}
</style>
