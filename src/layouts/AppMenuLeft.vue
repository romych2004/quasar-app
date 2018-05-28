<template>
  <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null">
		<q-list
 			no-border
      link
      inset-delimiter>
			<q-item v-for="item in items" :key="item.id" :to="item.href" exact>
				<q-item-side icon="school" />
				<q-item-main :label="item.label" />
			</q-item>
    </q-list>
  </q-layout-drawer>
</template>

<script>
export default {
	name: 'AppMenuLeft',
	props: {
		url: {
			type: String,
			default: '/menu',
		},
	},
	data() {
		return {
			items: [],
			leftDrawerOpen: this.$q.platform.is.desktop,
		};
	},
	created() {
		this.$http
			.get(this.url)
			.then(response => {
				this.items = response.data;
			})
			.catch(err => {
				this.$handler.get(err);
			});
	},
};
</script>

<style>
</style>
