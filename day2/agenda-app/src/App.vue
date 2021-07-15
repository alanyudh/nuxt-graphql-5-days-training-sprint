<template>
  <mdb-container>
    <mdb-row>
      <mdb-col col="9">
        <h2 class="text-uppercase my-3">Today:</h2>
        <Event
          v-for="(event, index) in events"
          :index="index"
          :time="event.time"
          :title="event.title"
          :location="event.location"
          :description="event.description"
          :key="index"
          @hapus="handleDelete"
          @edit="handleEdit"
        />
        <mdb-row>
          <mdb-col xl="3" md="6" class="mx-auto text-center">
            <mdb-btn color="info" @click.native="modal = true"
              >Add Event</mdb-btn
            >
          </mdb-col>
        </mdb-row>
      </mdb-col>
      <mdb-col col="3">
        <h3 class="text-uppercase my-3">Schedule</h3>
        <h6 class="my-3">
          It's going to be busy that today. You have
          <b>{{ events.length }} events</b> today.
        </h6>
        <h1 class="my-3">
          <mdb-row>
            <mdb-col col="3" class="text-center">
              <mdb-icon far icon="sun" />
            </mdb-col>
            <mdb-col col="9">Sunny</mdb-col>
          </mdb-row>
          <mdb-row>
            <mdb-col col="3" class="text-center">
              <mdb-icon icon="thermometer-three-quarters" />
            </mdb-col>
            <mdb-col col="9">23°C</mdb-col>
          </mdb-row>
        </h1>
        <p>
          Don't forget your sunglasses. Today will dry and sunny, becoming warm
          in the afternoon with temperatures of between 20 and 25 degrees.
        </p>
      </mdb-col>
    </mdb-row>
    <mdb-modal v-if="modal" @close="modal = false">
      <mdb-modal-header>
        <mdb-modal-title tag="h4" class="w-100 text-center font-weight-bold"
          >Add new event</mdb-modal-title
        >
      </mdb-modal-header>
      <mdb-modal-body>
        <form class="mx-3 grey-text">
          <mdb-input
            name="time"
            label="Time"
            icon="clock"
            placeholder="12:30"
            type="text"
            @input="handleInput($event, 'time')"
          />
          <mdb-input
            name="title"
            label="Title"
            icon="edit"
            placeholder="Briefing"
            type="text"
            @input="handleInput($event, 'title')"
          />
          <mdb-input
            name="location"
            label="Location (optional)"
            icon="map"
            type="text"
            @input="handleInput($event, 'location')"
          />
          <mdb-textarea
            name="description"
            label="Description (optional)"
            icon="sticky-note"
            @input="handleInput($event, 'description')"
          />
        </form>
      </mdb-modal-body>
      <mdb-modal-footer class="justify-content-center">
        <mdb-btn color="info" @click.native="addEvent">Add</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
    <mdb-modal v-if="modalEvent" @close="modalEvent = false">
      <mdb-modal-header>
        <mdb-modal-title tag="h4" class="w-100 text-center font-weight-bold"
          >Edit Event</mdb-modal-title
        >
      </mdb-modal-header>
      <mdb-modal-body>
        <form class="mx-3 grey-text">
          <mdb-input type="hidden" v-model="form.id" className="d-none" />
          <mdb-input
            name="time"
            label="Time"
            icon="clock"
            placeholder="12:30"
            type="text"
            v-model="form.time"
          />
          <mdb-input
            name="title"
            label="Title"
            icon="edit"
            placeholder="Briefing"
            type="text"
            v-model="form.title"
          />
          <mdb-input
            name="location"
            label="Location (optional)"
            icon="map"
            v-model="form.location"
            type="text"
          />
          <mdb-input
            name="description"
            label="Description (optional)"
            v-model="form.description"
            icon="sticky-note"
            type="textarea"
          />
        </form>
      </mdb-modal-body>
      <mdb-modal-footer class="justify-content-center">
        <mdb-btn color="info" @click.native="editEvent">Edit</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </mdb-container>
</template>
<script>
import Event from '@/components/Event';

import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbIcon,
  mdbBtn,
  mdbModal,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
  mdbInput,
  mdbTextarea,
} from 'mdbvue';

export default {
  name: 'App',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    Event,
    mdbIcon,
    mdbBtn,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbInput,
    mdbTextarea,
  },
  data() {
    return {
      events: [
        {
          time: '10:00',
          title: 'Breakfast with Simon',
          location: 'Lounge Caffe',
          description: 'Discuss Q3 targets',
        },
        {
          time: '10:30',
          title: 'Daily Standup Meeting (recurring)',
          location: 'Warsaw Spire Office',
        },
        {
          time: '11:00',
          title: 'Call with HRs',
        },
        {
          time: '12:00',
          title: 'Lunch with Timmoty',
          location: 'Canteen',
          description: 'Project evalutation',
        },
      ],
      form: {
        id: '',
        time: '',
        location: '',
        title: '',
        description: '',
      },
      modal: false,
      modalEvent: false,
      newValues: [],
    };
  },
  methods: {
    handleDelete(eventIndex) {
      this.events.splice(eventIndex, 1);
    },
    handleEdit(eventIndex) {
      this.form.id = eventIndex;
      this.form.time = this.events[eventIndex].time;
      this.form.title = this.events[eventIndex].title;
      this.form.location = this.events[eventIndex].location;
      this.form.description = this.events[eventIndex].description;
      this.modalEvent = true;
    },
    handleInput(val, type) {
      this.newValues[type] = val;
      // console.log(this.newValues);
      // console.log(type);
      // console.log(val);
    },
    addEvent() {
      this.events.push({
        time: this.newValues['time'],
        title: this.newValues['title'],
        location: this.newValues['location'],
        description: this.newValues['description'],
      });
      alert('Add Schedule Success !');
      this.modal = false;
    },
    editEvent() {
      this.events[this.form.id] = {
        time: this.form.time,
        title: this.form.title,
        location: this.form.location,
        description: this.form.description,
      };
      alert('Edit Schedule Success !');
      this.modalEvent = false;
    },
  },
};
</script>
