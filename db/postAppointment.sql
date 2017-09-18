insert into appointments (aptdate, timeslot, focus, serviceID, userID, phone, dogBreed, dogName, fixed, gender, info)
  values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
returning *;
