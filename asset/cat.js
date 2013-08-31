



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
		.removeClass('dance dead')
		.addClass('dance')

		return this;
	},
	
	hide:function(){
		this.$el.hide();

		return this;
	},

	dead:function(){
		this.$el
		.show()
		.removeClass('dance dead')
		.addClass('dead')

		return this;
	},

	place:function(pos){
		var x=0;
		switch(pos){
			case 1:x=130;break;		
			case 2:x=390;break;		
			case 3:x=640;break;		
		}
		this.$el.css({
			'left' : x+'px'
		})

		return this;
	},
}