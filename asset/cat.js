



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
	},
	
	hide:function(){
		this.$el.hide();
	},

	dead:function(){
		this.$el
		.show()
		.empty()
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
	},
}