<template>
  <div class="home">
    <b-container class="d-flex justify-content-center">
      <b-row>
        <b-col md="12">
          <b-form @submit="onSubmit" v-if="!editForm">
            <div class="h1">
              Todo Apps
            </div>
            <hr />
            <b-row>
              <b-col md="10">
                <b-form-input
                  id="input-1"
                  v-model="form.item"
                  type="text"
                  placeholder="What u do?"
                  required
                ></b-form-input>
              </b-col>
              <b-col md="2">
                <b-button type="submit" variant="primary">Add</b-button>
              </b-col>
            </b-row>
          </b-form>
          <b-form @submit="onEditSubmit" v-else>
            <div class="h1">
              Todo Apps
            </div>
            <hr />
            <b-row>
              <b-col md="10">
                <input type="hidden" v-model="form.id" />

                <b-form-input
                  id="input-1"
                  v-model="form.item"
                  type="text"
                  placeholder="What u do?"
                  required
                ></b-form-input>
              </b-col>
              <b-col md="2">
                <b-button type="submit" variant="success">Edit</b-button>
              </b-col>
            </b-row>
          </b-form>
        </b-col>
        <b-col md="12">
          <b-card
            v-for="(item, index) in todoList"
            :index="index"
            :key="index"
            :header="item.title"
            class="mt-3"
          >
            <h4>
              <b>{{ item.name }}</b>
            </h4>
            <b-button type="button" @click="onEdit(index)" variant="success">Edit</b-button> |
            <b-button type="button" @click="onDelete(index)" variant="danger">Delete</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      form: {
        id: "",
        item: ""
      },
      todoList: [],
      editForm: false
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      const data = {
        title: `Todo ${this.todoList.length + 1}`,
        name: this.form.item
      };
      this.todoList.push(data);
      alert(`Add Todo List ${data.name} Success !`);
      this.form.item = "";
    },
    onEditSubmit(event) {
      event.preventDefault();
      this.todoList[this.form.id].name = this.form.item;
      this.editForm = false;
      alert(`Edit Todo List ${this.form.item} Success !`);
      this.form.item = "";
    },
    onDelete(index) {
      this.todoList.splice(index, 1);
    },
    onEdit(index) {
      this.editForm = true;
      this.form.id = index;
      this.form.item = this.todoList[index].name;
    }
  }
};
</script>
