Vue.component('card', {
  props: ['title', 'color'],
  template: `
      <div class="card text-white bg-info mb-3" style="box-shadow:3px 3px 5px #c0c0c0">
      <div class="card-header">{{title}}</div>
      <div class="card-body">
        <p class="card-text"><slot></slot></p>
      </div>
      </div>
    `
});

let app = new Vue({
    el: '#app',
    methods: {
      addTask(){
        if(app.text == ""){
          return;
        }
        app.count++;
        app.tasks.push({id:app.count, task:app.text});
        app.text="";
      },
      resetTasks(){
        app.count=0;
        app.tasks = [];
        app.text="";
      }
    },
    data: {
      tasks: [
      ],
      count: 0,
      text: ""
    }
});