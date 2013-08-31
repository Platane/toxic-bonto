



var Cat=function(){ 
	Cat.prototype.init.apply(this,arguments);
};
Cat.prototype={



	init:function(){

		this.$el=$( '<div class="cat">' );

	},


	dance:function(){
		this.$el
		.show()
		.empty()

		return this;
	},
	
	hide:function(){
		this.$el.hide();

		return this;
	},

	dead:function(){
		this.$el
		.show()
		.empty()

		return this;
	},

	place:function(pos){
		var x=0;
		switch(pos){
			case 1:80;		
			case 2:320;		
			case 1:530;		
		}
		this.$el.css({
			'width' : x+'px'
		})

		return this;
	},
}