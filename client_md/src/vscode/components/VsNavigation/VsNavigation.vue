<template>
  <div id="vsnav">
    <v-select :items="selectItem" :height="35" :dense="true" solo></v-select>
    <v-treeview
      v-model="tree"
      :open="open"
      :items="items"
      activatable
      item-key="name"
      open-on-click
    >
      <template v-slot:prepend="{ item, open }">
        <v-icon v-if="!item.file">{{ open ? "mdi-folder-open" : "mdi-folder" }}</v-icon>
        <v-icon v-else>{{ files[item.file] }}</v-icon>
      </template>
    </v-treeview>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class VsNavigation extends Vue {
  private items = [
    {
      name: '.git'
    },
    {
      name: 'node_modules'
    },
    {
      name: 'public',
      children: [
        {
          name: 'static',
          children: [
            {
              name: 'logo.png',
              file: 'png'
            }
          ]
        },
        {
          name: 'favicon.ico',
          file: 'png'
        },
        {
          name: 'index.html',
          file: 'html'
        }
      ]
    },
    {
      name: '.gitignore',
      file: 'txt'
    },
    {
      name: 'babel.config.js',
      file: 'js'
    },
    {
      name: 'package.json',
      file: 'json'
    },
    {
      name: 'README.md',
      file: 'md'
    },
    {
      name: 'vue.config.js',
      file: 'js'
    },
    {
      name: 'yarn.lock',
      file: 'txt'
    }
  ]

  private selectItem = ['Foo', 'Bar', 'Fizz', 'Buzz']
  open = ['public']
  files = {
    html: 'mdi-language-html5',
    js: 'mdi-nodejs',
    json: 'mdi-json',
    md: 'mdi-markdown',
    pdf: 'mdi-file-pdf',
    png: 'mdi-file-image',
    txt: 'mdi-file-document-outline',
    xls: 'mdi-file-excel'
  }
  tree = []
}
</script>

<style lang="stylus" scoped>
#vsnav {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
