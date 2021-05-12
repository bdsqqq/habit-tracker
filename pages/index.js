import { useEffect } from "react";

export default function Home({ habit_instances }) {
  useEffect(() => {
    let instances = habit_instances.habit_tracker_habit_instance;
    instances.map((instance) => {
      console.log(instance.value, instance.instance_date);
    });
  }, [habit_instances]);
  return <div>Hej do</div>;
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query MyQuery {
        habit_tracker_habit_instance {
          id
          habit_id
          instance_date
          value
        }
      }
    `,
  });

  return {
    props: {
      habit_instances: data,
    },
  };
}

import { gql } from "@apollo/client";
import client from "../apollo-client";
