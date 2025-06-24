import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faCcAmazonPay } from "@fortawesome/free-brands-svg-icons/faCcAmazonPay"
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            We are passionate photographers and video editors, capturing moments with artistic precision and cinematic edits to transform your vision into stunning, timeless visual stories.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="/contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/share/1CsEJ7HScM/?mibextid=qi2Omg"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="https://www.youtube.com/@rkstudioaatroli3858/videos"
              className="hover:text-white transition-colors duration-300"
            >
              YouTube
            </a>
            <a
              href="https://www.instagram.com/rkstudio__official?utm_source=qr&igsh=MTNkM3JpZHk1bDc0dg=="
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        {/* <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <a
            href="https://www.google.com/maps?q=Opp.+Maher+samaj,+Keshod,+362220"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 mb-1"
          ></a>
          <p><FontAwesomeIcon icon={faMapMarkedAlt} /> Opp. Maher samaj, Keshod</p>
          <p>Keshod , 362220</p>
          <p>Email: info@rkstudio.com</p>
          <p>Phone: +918140444560 </p>
        </div> */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <a
            href="https://maps.app.goo.gl/VdUZwEptcnSFa7NN8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 mb-1"
          >
            <FontAwesomeIcon icon={faMapMarkedAlt} className="w-4 h-4 text-gray-400" />
            <span>Opp. Maher samaj, Keshod</span>
          </a>
          <p>Keshod, 362220</p>

          <p>Email: info@rkstudio.com</p>
          <p>Phone: +91 81404 44560</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">© 2025 RK Studio. All rights reserved.</p>
    </footer>
  )
}

export default Footer