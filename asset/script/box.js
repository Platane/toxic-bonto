



var Box=function(){ 
	Box.prototype.init.apply(this,arguments);
};
Box.prototype={

	tpl : 

	[
	'<div class="box">',
		'<div class="top" ></div>',
		'<div class="bottom" ></div>',
		'<div class="right" ></div>',
		'<div class="left" ></div>',
		'<div class="front" ></div>',
	'</div>'

	].join(''),


	verbalize : 
	[
		'',
		'one',
		'two',
		'three'
	],

	init:function(){

		this.$el=$( this.tpl );



	},

	moveTo:function(pos,delay){

		var label;

		if( !this.actualPos || pos == this.actualPos )
			label = this.verbalize[ pos ];
		else
			label = this.verbalize[ pos ]+'-from-'+this.verbalize[ this.actualPos ];

		this.actualPos=pos;

		this.$el
		.removeClass( this.exClass||"" )
		.addClass( label )
		.css('animation-duration',Math.round(delay)+'ms' )

		this.exClass=label;

		return this;

	},

	goUp:function(){
		this.$el
		.addClass( 'up' );
		return this;
	},

	goDown:function(){
		this.$el
		.removeClass( 'up' );
		return this;
	},
}




var Boxes=function(){ 
	Boxes.prototype.init.apply(this,arguments);
};
Boxes.prototype={

	tpl : 
	[
	'<div class="plate">',
	'</div>'

	].join(''),


	plateWidth : 680,
	plateHeight : 400,


	init:function(){

		this.$el=$( this.tpl );

		this.boxList=[];

		for(var i=0;i<3;i++){

			var box=new Box();

			box.id=i;

			this.$el.append( box.$el );

			this.boxList.push( box );
		}


		this.place();
	},

	place:function(){

		var w= this.plateWidth,
			h= this.plateHeight,
			marge= this.plateWidth / 5;

		this.$el
		.css({
			'width':w+'px',
			'height':h+'px',
		})

		for(var i=0;i<3;i++){
			this.boxList[i].moveTo( i+1 );
		}
		
		return this;
	},

	shuffleOnce:function( combinaison , delay ){
		for(var i=0;i<3;i++){
			this.boxList[i].moveTo(combinaison[i] , delay );
		}
		return this;
	},

	shuffleAnim:function( c ){
		if( c ){
			this.cancel();
			this.on_going_combinaison=c;
		}

		var delay = 190 * Math.min( this.on_going_combinaison.length / this.n_shuffle + 1 , 1.8 )

		this.shuffleOnce( this.on_going_combinaison.shift() , delay );

		if( this.on_going_combinaison.length == 0 )
			return;

		this.timeout = window.setTimeout( $.proxy(this.shuffleAnim,this) , delay+20 );
	},

	cancel:function(){
		window.clearTimeout( this.timeout );
		return this;
	},

	shuffle:function(){
		this.n_shuffle=12;

		var combinaisons=[],c;

		for(var k=0;k<this.n_shuffle;k++){

			// generate a combinaison

			c=null;

			while( !c || ( combinaisons.length>0 && c[0] == combinaisons[0][0] && c[1] == combinaisons[0][1] ) ){

				c=[];

				var x=[1,2,3];

				for(var j=0;j<2;j++){
					var l=Math.floor( Math.random()*x.length );

					c.push( x.splice(l,1)[0] );
				}

				c.push(x[0]);
			}

			combinaisons.unshift( c );
		}

		this.shuffleAnim( combinaisons );

		return combinaisons[ combinaisons.length-1 ];
	},

	goUp:function(){
		for(var i=0;i<3;i++)
			this.boxList[i].goUp();
		return this;
	},

	goDown:function(){
		for(var i=0;i<3;i++)
			this.boxList[i].goDown();
		return this;
	},
}


