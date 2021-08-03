class rope{
	constructor(body1,body2,pointA,pointB)
	{
this.pointA=pointA
this.pointB=pointB

    options={
	bodyA:body1,
	bodyB:body2,
	pointB:{x:this.pointA,y:this.pointB}
}
	//create rope constraint here
	con = Matter.Constraint.create({
		pointA:{x:200,y:20},
		bodyB:bob,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });

	  World.add(world,con);
	}


    //create display() here 
	display()
	{
		 pointA=this.rope.bodyA.position;
		 pointB=this.rope.bodyB.position;

		 strokeWeight(2);

		 push();
		 strokeWeight(2);
		 stroke(255);
		 line(con.pointA.x,con.pointA.y,bob1.position.x,bob1.position.y);
		 line(con.pointA.x,con.pointA.y,bob2.position.x,bob2.position.y);
		 line(con.pointA.x,con.pointA.y,bob3.position.x,bob3.position.y);
		 line(con.pointA.x,con.pointA.y,bob4.position.x,bob4.position.y);
		 pop();
		 

	}

}
