--table name "The_Waggin_Trails"

CREATE TABLE "user" (
	"id" serial NOT NULL,
	"username" varchar(255) NOT NULL UNIQUE,
	"password" varchar(255) NOT NULL,
	"access_level" int DEFAULT 0,
	"avatar" varchar(400),
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "favorites-junction-table" (
	"id" serial NOT NULL,
	"user_id" int NOT NULL,
	"dog_park_id" int NOT NULL,
	CONSTRAINT "favorites-junction-table_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "dog_parks" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"location" varchar(255) NOT NULL UNIQUE,
	"description" varchar(400) NOT NULL,
	"image_url" varchar(400) NOT NULL,
	CONSTRAINT "dog_parks_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "tags" (
	"id" serial NOT NULL,
	"tag" varchar(255) NOT NULL,
	CONSTRAINT "tags_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "dog_park_tags" (
	"id" serial NOT NULL,
	"dog_park_id" int NOT NULL ON DELETE CASCADE,
	"tag_id" int NOT NULL ON DELETE CASCADE,
	CONSTRAINT "dog_park_tags_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "ratings" (
	"id" serial NOT NULL,
	"user_id" int NOT NULL,
	"dog_park_id" int NOT NULL,
	"comments" varchar(350),
	"ratings" decimal DEFAULT 0,
	"isFav" boolean DEFAULT false,
	CONSTRAINT "ratings_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "favorites-junction-table" ADD CONSTRAINT "favorites-junction-table_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE;
ALTER TABLE "favorites-junction-table" ADD CONSTRAINT "favorites-junction-table_fk1" FOREIGN KEY ("dog_park_id") REFERENCES "dog_parks"("id") ON DELETE CASCADE;
ALTER TABLE "favorites-junction-table" ADD CONSTRAINT UC_Favorite UNIQUE (user_id, dog_park_id);

ALTER TABLE "dog_park_tags" ADD CONSTRAINT "dog_park_tags_fk0" FOREIGN KEY ("dog_park_id") REFERENCES "dog_parks"("id");
ALTER TABLE "dog_park_tags" ADD CONSTRAINT "dog_park_tags_fk1" FOREIGN KEY ("tag_id") REFERENCES "tags"("id");

ALTER TABLE "ratings" ADD CONSTRAINT "ratings_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_fk1" FOREIGN KEY ("dog_park_id") REFERENCES "dog_parks"("id");


INSERT INTO "tags" ("tag")
VALUES
('Free Poop Bags'),
('Fenced In'),
('No Fences'),
('Small Dog Area'),
('Trails'),
('Trash Cans'),
('Recylcing'),
('Easy Parking'),
('Lake'),
('Pond'),
('River'),
('Muddy'),
('Heavy brush and undergrowth'),
('Grass'),
('Popular');

INSERT INTO "dog_parks" ("name", "location", "description", "image_url")
VALUES
('Minnehaha Dog Park', '5399 Minnehaha Park Dr S, Minneapolis, MN 55417', 'A 6.6-acre riverfront recreation area featuring trails where dogs with required permits can roam.', 'https://www.minneapolisparks.org/wp-content/uploads/2018/11/Minnehaha_Dog_Park_pups2.jpg'),
('Lake of the Isles Dog Park', '2845 W Lake of the Isles Parkway Minneapolis, MN 55405', 'Dogs are allowed to play off-leash in a designated area of this park, located on Lake of the Isles Parkway.', 'https://photos.bringfido.com/attractions/1/2/8/2821/2821_28186.jpg?size=slide&density=2x');
('Meeker Island Dog Park', '486 N Mississippi River Blvd, St Paul, MN 55104', 'The park is located along the river at the bottom of the bluff and can be accessed from the entrance along the Mississippi River Blvd trail. It features a dog run and a dog beach. There is no fence surrounding the park, which is bordered by the Mississippi River and the steep river bluffs.', 'https://www.twincities.com/wp-content/uploads/2017/09/gsp-dog-parks014.jpg?w=620')
('Woodview Off-leash Dog Area', 'Larpenteur Ave W, Roseville, MN 55113','This is a cooperative project between the City of Roseville and Ramsey County. Dogs without a leash can be exercised in two soft trail areas, located off of Larpenteur Avenue. To the delight of dogs and dog owners, the second area is designed so that dogs can run free in approximately five acres of open space.', 'https://photos.bringfido.com/attractions/7/4/8/3847/3847_24847.jpg?size=slide&density=2x' )
('Battle Creek Dog Park', '2350 Upper Afton Rd, Maplewood, MN 55119', 'Battle Creek Off-Leash Dog Park is a Ramsey County Off Leash Dog Park in Maplewood, Minnesota. It is a spacious 35 acre area that is fully fenced in. The dog park has miles of wooded trails, two small ponds and one larger swimming pond that is fenced off, 3 entrance gates*, two "playgrounds" and lots of friendly people. There is no water (besides the ponds), so be sure to bring some.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4rKWhft1aundJuycTMDIrzoZ3JpzUjqQbsQ&usqp=CAU')
('High Bridge Dog Park', '59 Randolph Ave, St Paul, MN 55102', 'High Bridge Dog Park, located at the site of a former coal power plant, is a fully-fenced, seven-acre dog park with plenty of space for your pup to romp off leash. The dog park entrance is on the westernmost end of the park, near the parking lot.', 'https://i.ytimg.com/vi/NFw5Z_sMbgQ/maxresdefault.jpg')
('Alimagnet Dog Park', '1200 Alimagnet Pkwy #2, Burnsville, MN 55337', 'In 2005, this suburban gem of a pup playland was voted one of the best dog parks in the nation by Dog Fancy magazine. The seven-acre park is fenced and has a pond, a heated weather shelter, a special space for elderly or special needs dogs, a walking trail, and even a dog-washing station. A large pond is available for pups who love to swim. Permit encouraged but not required. Parking available.', 'https://cdn-assets.alltrails.com/uploads/photo/image/41955493/large_b7565eab16e0a6d182826ce9e8a66708.jpg')
('Lauderdale Dog Park', '2328 Roselawn Ave W, Lauderdale, MN 55113', 'Dogs are welcome at Lauderdale Dog Park. This is a small fenced-in dog park located in the NE corner of Community Park. Dogs are welcome to play with their friends and get some exercise in this park. This pet-friendly recreation area is open every day of the week from 8am until 10pm.', '')
('Arlington Off-Leash Dog Park', 'Arlington Ave E, St Paul, MN 55130', 'Take your dog to romp and run at this popular St. Paul off-leash area. The ground is covered in wood chips, making it extra easy to clean up after your pooch. Play fetch with Fido in the open “commons” area, or just stroll and enjoy the scenery. Be sure to bring a jug of water along for four-legged friends to share. Other features include fencing, trees/wooded areas, benches, and picnic tables.', 'https://4.bp.blogspot.com/-IUJ-2hu5U_Q/V5KGMH-ZkoI/AAAAAAAAHOE/xqkwCpJvmNoOh8zCSrmpheTMoST71JBewCLcB/s1600/%25C2%25A9StPaul-ArlingtonArkwrightDogPark-Millie.jpg')

INSERT INTO "dog_park_tags" ("dog_park_id", "tag_id")
VALUES
(1, 2), (1, 5), (1, 6), (1, 11), (1, 12), 
(1, 13), (1, 15), (2, 1), (2, 2), (2, 4), (2, 6), (2, 12);

