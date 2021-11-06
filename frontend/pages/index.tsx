import { GetServerSideProps } from 'next';
import React from 'react'
import { License } from '../interface/interfaces';


interface Props {
}

export default function index({ }: Props) {
  return (
    <div>
      hello
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const licenses: License[] = [];


  return { props: { licensesArray: licenses } };
};
