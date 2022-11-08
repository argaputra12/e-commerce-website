from app.models.order import Order


def order_seed(fake, session, user_id):
    order_id = []
    statuses = ["processed", "shipped", "cancelled", "finished"]
    for user in user_id:
        for status in statuses:
            if status == "processed":
                iteration = fake.pyint(min_value=1, max_value=3)
            if status == "shipped":
                iteration = fake.pyint(min_value=1, max_value=2)
            if status == "cancelled":
                iteration = fake.pyint(min_value=1, max_value=4)
            if status == "finished":
                iteration = fake.pyint(min_value=1, max_value=5)
            for _ in range(iteration):
                order = Order.seed(fake, user, status)
                session.add(order)
                order_id.append(order.id)

    return order_id
