import { Helmet } from "react-helmet";
import { Img, Button, Text, Heading } from "../../components";
import Header from "../../components/Header";
import './styles.css';
import React from "react";

import {Link} from 'react-router-dom'

export default function ComfortConnectPage() {
  return (
    <>
      <Helmet>
        <title>Emotional Support Letter Consultation | Comfort Connect</title>
        <meta
          name="description"
          content="Get trusted emotional support letter consultations with Comfort Connect. Experienced teams ready to assist you in feeling supported. Start your journey today."
        />
      </Helmet>
      <div className="w-full bg-light_green-50 py-20 lg:py-8 md:py-5 sm:py-4">
        <div className="mb-1 flex flex-col items-center">
          <div className="container-xs lg:px-5 md:px-5">
            <div>
              <div>
                <Header />
                <div className="relative h-[830px]">
                  <div className="absolute left-0 right-0 top-[12%] m-auto flex flex-1 flex-col items-start gap-[50px]">
                    <Heading
                      as="h1"
                      className="w-[54%] text-[68px] font-extrabold leading-[92px] text-txt-0 lg:w-full lg:text-[48px] md:w-full md:text-[48px]"
                    >
                      <div className="text-txt-0">Get an Emotional</div>
                      <div className="text-2">Support Letter</div>
                      <div className="text-txt-0">Consultation You Can Trust.</div>

                    </Heading>
                    <Text
                      as="p"
                      className="w-[42%] font-poppins text-[18px] font-normal leading-[27px] text-txt-0 lg:w-full lg:text-[15px] md:w-full"
                    >
                      Warmly little before cousin sussex entire men set. Blessing it ladyship on sensible judgment settling outweigh. Worse linen an of civil jokes leave offer.{" "}
                    </Text>
                    <Link to="/User">
                    <Button
                      shape="round"
                      className="min-w-[222px] rounded-full px-[34px] font-bold bg-orange-500 text-white hover:bg-orange-600 sm:px-4"
                    >
                      Get started..
                    </Button>
                    </Link>
                  </div>
                  <Img
                    src="images/images.jpg"
                    alt="Feature Image"
                    className="absolute bottom-0 right-[18px] top-0 my-auto h-[830px] w-[38%] object-contain"
                  />
                </div>
              </div>
              <footer className="stats">
                <div className="stat">
                  <h3>Experienced</h3>
                  <p>8+</p>
                </div>
                <div className="stat">
                  <h3>Teams</h3>
                  <p>122+</p>
                </div>
                <div className="stat">
                  <h3>Clients</h3>
                  <p>563+</p>
                </div>
                <div className="stat">
                  <h3>Projects Done</h3>
                  <p>232+</p>
                </div>
              </footer>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
