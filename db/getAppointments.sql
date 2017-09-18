select * from appointments a
join users u on u.id = a.userID
join services s on s.id = a.serviceID
