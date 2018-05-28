<template>
  <q-layout view="hHh Lpr lFf">
		<app-header/>
		<app-menu-left/>
		<q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import AppHeader from 'layouts/AppHeader.vue';
import AppMenuLeft from 'layouts/AppMenuLeft.vue';

export default {
	name: 'LayoutDefault',
	data() {
		return {
			leftDrawerOpen: this.$q.platform.is.desktop,
		};
	},

	components: {
		AppHeader,
		AppMenuLeft,
	},
};
</script>

<style>
</style>
