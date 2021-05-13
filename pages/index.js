export default function Home({ habit_instances, today }) {
  return (
    <ul>
      {habit_instances.habit_tracker_habit_instance.map((instance) => (
        <li key={instance.value}>{instance.value}</li>
      ))}
      <li>{today}</li>
    </ul>
  );
}

export async function getServerSideProps() {
  let today = new Date().toISOString().slice(0, 10);
  const { data } = await client.query({
    variables: {
      date: today,
    },
    query: gql`
      query MyQuery($date: date!) {
        habit_tracker_habit_instance(
          where: {
            habit_id: { _eq: 1 }
            _and: { instance_date: { _eq: $date } }
          }
        ) {
          value
          instance_date
        }
      }
    `,
  });

  return {
    props: {
      habit_instances: data,
      today: today,
    },
  };
}

import { gql } from "@apollo/client";
import client from "../apollo-client";
