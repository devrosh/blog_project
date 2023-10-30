import React from "react";

import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";

function PostDetails() {
  return (
    <div className="post_container">
      <div>
        <h2>
          Listicles are eye-catching because they organize information, inform
          you up-front how long the article will be and how many new things
          you’ll learn.
        </h2>
        <div className="date_container">
          <div>
            <p>Devrosh</p>
          </div>

          <div>
            <p>2023-08-09 14:25 am</p>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
            alt="post_image"
            style={{
              width: "80%",
              height: "500px",
              objectFit: "cover",
              marginTop: "20px",
              borderRadius: "2px",
            }}
          />
        </div>
      </div>
      <div
        style={{ width: "80%", margin: "auto auto", padding: "20px 0 20px 0" }}
      >
        <h3 style={{ textAlign: "left" }}>
          How are inoculated seeds prepared?
        </h3>
        <p style={{ textAlign: "left" }}>
          Using peas as an example, seed companies would isolate the bacteria
          from root nodules of already healthy growing peas. They grow that
          bacterium in a laboratory. Usually this is done on a mass production
          scale for efficiency. The bacteria are then mixed with peat to
          increase the volume – and the inoculant is ready. The inoculants
          available in market usually contain 1,000 times the number of bacteria
          normally found in our soils. It’s a bit like taking a probiotic for
          your gut health. So, using up inoculated seeds is just speeding up the
          numbers and increasing the population of bacteria to get the benefit.
          In fact, in some cases soil may not contain the needed bacteria – and
          thus your peas or other legumes will not grow well.
        </p>
        <h3 style={{ textAlign: "left", marginTop: "20px" }}>
          How are inoculated seeds prepared?
        </h3>
        <p style={{ textAlign: "left" }}>
          Using peas as an example, seed companies would isolate the bacteria
          from root nodules of already healthy growing peas. They grow that
          bacterium in a laboratory. Usually this is done on a mass production
          scale for efficiency. The bacteria are then mixed with peat to
          increase the volume – and the inoculant is ready. The inoculants
          available in market usually contain 1,000 times the number of bacteria
          normally found in our soils. It’s a bit like taking a probiotic for
          your gut health. So, using up inoculated seeds is just speeding up the
          numbers and increasing the population of bacteria to get the benefit.
          In fact, in some cases soil may not contain the needed bacteria – and
          thus your peas or other legumes will not grow well.
        </p>
        <h3 style={{ textAlign: "left" }}>
          How are inoculated seeds prepared?
        </h3>
        <p style={{ textAlign: "left" }}>
          Using peas as an example, seed companies would isolate the bacteria
          from root nodules of already healthy growing peas. They grow that
          bacterium in a laboratory. Usually this is done on a mass production
          scale for efficiency. The bacteria are then mixed with peat to
          increase the volume – and the inoculant is ready. The inoculants
          available in market usually contain 1,000 times the number of bacteria
          normally found in our soils. It’s a bit like taking a probiotic for
          your gut health. So, using up inoculated seeds is just speeding up the
          numbers and increasing the population of bacteria to get the benefit.
          In fact, in some cases soil may not contain the needed bacteria – and
          thus your peas or other legumes will not grow well.
        </p>
        <h3 style={{ textAlign: "left", marginTop: "20px" }}>
          How are inoculated seeds prepared?
        </h3>
        <p style={{ textAlign: "left" }}>
          Using peas as an example, seed companies would isolate the bacteria
          from root nodules of already healthy growing peas. They grow that
          bacterium in a laboratory. Usually this is done on a mass production
          scale for efficiency. The bacteria are then mixed with peat to
          increase the volume – and the inoculant is ready. The inoculants
          available in market usually contain 1,000 times the number of bacteria
          normally found in our soils. It’s a bit like taking a probiotic for
          your gut health. So, using up inoculated seeds is just speeding up the
          numbers and increasing the population of bacteria to get the benefit.
          In fact, in some cases soil may not contain the needed bacteria – and
          thus your peas or other legumes will not grow well.
        </p>
        <div className="social-icons">
          <h5>Share post:</h5>
          <div>
            <FaFacebook size={25} />
            <FaInstagram size={25} />
            <FaTwitter size={25} />
            <FaTelegram size={25} />
          </div>
        </div>
        <div className="comments">
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              width: "400px",
            }}
          >
            Leave a comment:
            <textarea
              rows={12}
              placeholder="Write a comment..."
              style={{ fontFamily: "sans-serif", border: "1px solid red" }}
            />
            <button
              style={{
                width: "150px",
                padding: "10px 15px",
                marginTop: "30px",
                border: "1px solid red",
                backgroundColor: "#ed2939",
                cursor: "pointer",
                borderRadius: "3px",
                color: "white",
              }}
            >
              Post a comment
            </button>
          </label>
        </div>
        <div className="comment-details"></div>
      </div>
    </div>
  );
}

export default PostDetails;
