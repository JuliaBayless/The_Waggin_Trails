--table name "The_Waggin_Trails"

CREATE TABLE "user" (
	"id" serial NOT NULL,
	"username" varchar(255) NOT NULL UNIQUE,
	"password" varchar(255) NOT NULL,
	"access_level" int NOT NULL,
	"image" varchar(400),
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
	"image" varchar(400) NOT NULL,
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
	"dog_park_id" int NOT NULL,
	"tag_id" int NOT NULL,
	CONSTRAINT "dog_park_tags_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "ratings" (
	"id" serial NOT NULL,
	"user_id" int NOT NULL,
	"dog_park_id" int NOT NULL,
	"comments" varchar(350),
	"ratings" decimal NOT NULL,
	CONSTRAINT "ratings_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


ALTER TABLE "favorites-junction-table" ADD CONSTRAINT "favorites-junction-table_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "favorites-junction-table" ADD CONSTRAINT "favorites-junction-table_fk1" FOREIGN KEY ("dog_park_id") REFERENCES "dog_parks"("id");

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

INSERT INTO "dog_parks" ("name", "location", "description", "image")
VALUES
('Minnehaha Dog Park', '5399 Minnehaha Park Dr S, Minneapolis, MN 55417', 'A 6.6-acre riverfront recreation area featuring trails where dogs with required permits can roam.', 'https://www.minneapolisparks.org/wp-content/uploads/2018/11/Minnehaha_Dog_Park_pups2.jpg'),
('Lake of the Isles Dog Park', '2845 W Lake of the Isles Parkway Minneapolis, MN 55405', 'Dogs are allowed to play off-leash in a designated area of this park, located on Lake of the Isles Parkway.', 'https://photos.bringfido.com/attractions/1/2/8/2821/2821_28186.jpg?size=slide&density=2x');

INSERT INTO "dog_park_tags" ("dog_park_id", "tag_id")
VALUES
(1, 2),(1, 5),(1, 6),(1, 11),(1, 12),(1, 13),
(1, 15),(2, 1),(2, 2),(2, 4),(2, 6),(2, 12);

