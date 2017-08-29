<template>
<m-container>
    <m-nav navClass="teal">
      <a href="#" class="brand-logo" slot="logo">Material Sample</a>
    </m-nav>
    <m-row>
      <m-grid s12 m9 l10>
        <m-row>
          <m-grid s12>
            <m-progress-linear indeterminate></m-progress-linear>
          </m-grid>
          <m-grid id="card" class="scrollspy" s12>
            <m-card>
              <div class="card-content">
                <span class="card-title">Card Title</span>
                <p>Example of card text for a visual.</p>
              </div>
              <div class="card-action">
                <a href="#">Link Text</a>
              </div>
            </m-card>
          </m-grid>
          <m-grid s12>
            <m-btn type="button" v-m-tooltip:top="toolTipMessage" wavesLight>Button</m-btn>
            <m-btn-link id="featureDis" type="button" class="pulse" floating wavesLight>B</m-btn-link>
            <m-btn type="button" wavesLight v-m-tap-target:fdsample>Open Feature Discovery</m-btn>
            <m-tap-target id="fdsample" dataActivates="featureDis">
              <h2>FD Title</h2>
              <p>Feature Discovery bit of text</p>
            </m-tap-target>
          </m-grid>
          <m-grid s12>
            <m-carousel :items="carouselItems"></m-carousel>
          </m-grid>
          <m-grid s12>
            <m-fab toolbar toggle icon="menu">
              <ul slot="items">
                <li>
                  <m-btn-link wavesLight class="cyan"><m-icon>insert_chart</m-icon></m-btn-link>
                </li>
                <li>
                  <m-btn-link wavesLight class="yellow"><m-icon>insert_chart</m-icon></m-btn-link>
                </li>
                <li>
                  <m-btn-link wavesLight class="red"><m-icon>insert_chart</m-icon></m-btn-link>
                </li>
                <li>
                  <m-btn-link wavesLight><m-icon>insert_chart</m-icon></m-btn-link>
                </li>
              </ul>
            </m-fab>
          </m-grid>
          <m-grid id="breadcrumbs" class="scrollspy" s12>
            <m-breadcrumbs class="teal" :items="navActions"></m-breadcrumbs>
          </m-grid>
          <m-grid s12>
            <m-collapsible>
              <li>
                <m-collapsible-header>
                  <m-icon>filter_drama</m-icon> First
                </m-collapsible-header>
                <m-collapsible-body>
                  First amount of text for the body.
                </m-collapsible-body>
              </li>
              <li>
                <m-collapsible-header>
                  <m-icon>bookmark</m-icon> Second
                </m-collapsible-header>
                <m-collapsible-body>
                  Second amount of text for the body.
                </m-collapsible-body>
              </li>
              <li>
                <m-collapsible-header>
                  <m-icon>copyright</m-icon> Third
                </m-collapsible-header>
                <m-collapsible-body>
                  Third amount of text for the body.
                </m-collapsible-body>
              </li>
            </m-collapsible>
          </m-grid>
          <m-grid s12>
            <m-collection>
              <m-collection-item>Item 1<m-badge new class="red">9</m-badge></m-collection-item>
              <m-collection-item active>Item 2<m-badge>2</m-badge></m-collection-item>
              <m-collection-item>Item 3</m-collection-item>
            </m-collection>
          </m-grid>
          <m-grid id="table" class="scrollspy" s12>
            <m-table highlight 
                     responsive 
                     :columns="newTableColumns" 
                     :tableData="tableData" 
                     :options="tableOptions"
                     :selectedRows="tableSelectedRows"></m-table>
          </m-grid>
          <m-grid s12>
            <m-chip>First chip</m-chip>
            <m-chip close>Second Chip</m-chip>
          </m-grid>
          <m-grid s12>
            <m-row>
              <form>
                <m-grid class="input-field" s12 m6>
                  <m-text-input placeholder="First Name" id="first_name" length="120" @blur="consoleLogger" @focus="consoleLogger" @change="consoleLogger"></m-text-input>
                  <label for="first_name">First Name</label>
              </m-grid>
                <m-grid class="input-field" s12 m6>
                    <m-text-input  id="last_name" type="text" validate></m-text-input>
                    <label for="last_name">Last Name</label>
              </m-grid>
                <m-grid class="input-field" s12 m6>
                    <input disabled value="I am not editable" id="disabled" type="text" class="validate">
                    <label for="disabled" class="active">Disabled</label>
              </m-grid>
              <m-grid class="input-field" s12 m6>
                <m-select :items="multiselect"></m-select>
                <m-select multiple :items="multiselect" selectText="Choose multiple options"></m-select>
                <label>Materialize Select</label>
              </m-grid>
              <m-grid s12>
                <m-checkbox name="Red">Red</m-checkbox>
                <m-checkbox value="true" name="Yellow">Yellow</m-checkbox>
                <m-checkbox value="true" filledIn name="FilledIn">Filled In</m-checkbox>
                <m-checkbox indeterminate name="Indeterminate">Indeterminate</m-checkbox>
                <m-checkbox disabled value="true" name="Disabled">Disabled</m-checkbox>
                <m-checkbox disabled filledIn name="DisabledFilled">Filled In Disabled</m-checkbox>
              </m-grid>
              <m-grid s12 m6>
                <m-radio id="radio-1" withGap name="radio" val="1">One</m-radio>
                <m-radio id="radio-2" withGap name="radio" val="2">Two</m-radio>
                <m-radio id="radio-3" withGap name="radio" val="3">Three</m-radio>
                <m-radio id="radio-4" withGap name="radio" val="4">Four</m-radio>
              </m-grid>
              <m-grid s12 m6>
                <label id="dateInput">Date</label>
                <m-date-input id="dateInput"></m-date-input>
              </m-grid>
              <m-grid s12>
                <m-switch on="On" off="Off" checked name="switch-1"></m-switch>
              </m-grid>
              <m-grid s12 m6>
              <br />
                <m-row class="input-field">
                  <m-icon prefix>mode_edit</m-icon>
                  <m-text-area value="Write this text." id="icon_prefix2" validate></m-text-area>
                  <label for="icon_prefix2">Text Area</label>
                </m-row>
              </m-grid>
              </form>
            </m-row>
          </m-grid>
          <m-grid s12>
             <m-btn-link v-m-modal:modal="modalOptions">Modal</m-btn-link>
             <m-modal id="modal">
               <div slot="content">
                 <h4>Sample Modal</h4>
                 <p>Modal Content paragraph!</p>
               </div>
               <div slot="footer">
                 <m-btn-link class="pull-right" waves-light modal flat>Disagree</m-btn-link>
                 <m-btn-link class="pull-right" waves-light modal flat>Agree</m-btn-link>
               </div>
             </m-modal>
          </m-grid>
          <m-grid s12>

          </m-grid>
          <m-grid s12>
            <m-tabs :selected="selectedTab">
              <li class="tab"><a href="#test1">Test 1</a></li>
              <li class="tab"><a href="#test2">Test 2</a></li>
              <li class="tab"><a href="#test3">Test 3</a></li>
            </m-tabs>
            <div id="test1" class="col s12 blue">Test 1</div>
            <div id="test2" class="col s12 red">Test 2</div>
            <div id="test3" class="col s12 green">Test 3</div>
          </m-grid>
          <m-grid id="chips" class="scrollspy" s12>
            <m-chips :data="chipData" @change-chips="chipsListener"></m-chips>
          </m-grid>
          <m-grid s12>
            <label for="timepicker">Time</label>
            <m-time-picker id="timepicker"></m-time-picker>
          </m-grid>
        </m-row>
      </m-grid>
      <m-grid class="hide-on-small-only" m3 l2>
        <div v-m-pushpin="pushpinOptions">
          <m-scrollspy :linkList="scrollSpyLinks"></m-scrollspy>
        </div>
      </m-grid>
    </m-row>
</m-container>

</template>

<script>
export default {
  data: function() {
    return {
      toolTipMessage: 'Tool Tip',
      columns: [ 
        { name: 'id', hasSort: true },
        { name: 'firstname', hasSort: true },
        { name: 'lastname', hasSort: false },
        { name: 'active', hasSort: true },
      ],
      tableData: [
        { id: 1, firstname: 'Sarah', lastname: 'Alpha', active: true },
        { id: 2, firstname: 'Sarah', lastname: 'Delta', active: false },
        { id: 3, firstname: 'Johnathan James', lastname: 'Delta', active: true },
        { id: 4, firstname: 'Marshall', lastname: 'Beta', active: false },
        { id: 5, firstname: 'Marshall', lastname: 'Charlie', active: true },
        { id: 6, firstname: 'Sarah', lastname: 'Alpha', active: true },
        { id: 7, firstname: 'Sarah', lastname: 'Delta', active: false },
        { id: 8, firstname: 'Johnathan James', lastname: 'Delta', active: true },
        { id: 9, firstname: 'Marshall', lastname: 'Beta', active: false },
        { id: 10, firstname: 'Marshall', lastname: 'Charlie', active: true },
        { id: 11, firstname: 'Sarah', lastname: 'Epsilon', active: true },
        { id: 12, firstname: 'Kevin', lastname: 'Foxtrot', active: false },
        { id: 13, firstname: 'Kevin', lastname: 'Gamma', active: true },
        { id: 14, firstname: 'Marshall', lastname: 'Beta', active: false },
        { id: 15, firstname: 'Albert', lastname: 'Charlie', active: true }
      ],
      tableKey: 'id',
      navActions: [
        { href: '#', text: 'First' },
        { href: '#', text: 'Second' },
        { href: '#', text: 'Third' }
      ],
      multiselect: [
        { id: 1, text: 'First' },
        { id: 2, text: 'Second' },
        { id: 3, text: 'Third' },
        { id: 4, text: 'Fourth' }
      ],
      carouselItems: [
        'http://lorempixel.com/250/250/nature/1',
        'http://lorempixel.com/250/250/nature/2',
        /*'http://lorempixel.com/250/250/nature/3',
        'http://lorempixel.com/250/250/nature/4',
        'http://lorempixel.com/250/250/nature/5'*/
      ],
      tabFunction: LogIt,
      selectedTab: 'test1',
      modalOptions: {
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '4%', // Starting top style attribute
        endingTop: '10%', // Ending top style attribute
        ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
          console.log("Ready");
        },
        complete: function() { console.log('Closed'); } // Callback for Modal close
      },
      pushpinOptions: {
        top: 80
      },
      newTableColumns: [ 
        'id', 
        { id: 'firstname', displayText: 'First Name'},
        { id: 'lastname', cellRenderer: function(ce, rd, co, vi) { return  ce('td', {}, [ rd['lastname'].toString() ])}}, 
        'active' 
      ],
      chipData: [
        { tag: 'Apple', }, 
        { tag: 'Microsoft',},
      ],
      chipAutocompleteData: {
          'Apple': null,
          'Microsoft': null,
          'Microchips': null,
          'Microprocessor': null,
          'Google': null
      },
      chipAutocompleteLimit: 1,
      scrollSpyLinks: [
        { id: "card", text: "Card" },
        { id: "breadcrumbs", text: "Bread Crumbs" },
        { id: "table", text: "Table" },
        { id: "chips", text: "Chips" },
      ],
      tableSelectedRows: [ 1, 2, 6, 8, 11 ]
    }
  },
  computed: {
    tableOptions(){
      return {
        rowKey: 'id',
        paging: true,
        pagingDefault: 5,
        pagingOptions: [5,10,25,50],
        sortable: true,
        selectable:true
      };
    }
  },
  methods: {
    chipsListener(payload){
      this.chipData = payload;
    },
    consoleLogger(event){
      console.log(event)
    }
  }
}

function LogIt(tabReturnVal){
  console.log("Changed!", tabReturnVal);
}
</script>

<style lang="scss">
#app {
  margin-top: 60px;
}

</style>
