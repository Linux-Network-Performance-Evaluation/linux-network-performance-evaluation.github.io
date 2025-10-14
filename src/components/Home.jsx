function Home() {

    return (
        <>
            {/* Project Overview Section */}
            <section className="justify-content-end align-items-center">
                <h2>Project Overview</h2>
                <p>This portfolio presents our project evaluating the performance of Linux-based operating systems in a physical environment. Explore each section using the navigation tabs above to learn about our research, planning, teamwork, development, and more.</p>
            </section>

            {/* Project Objectives Section */}
            <section className="justify-content-end align-items-center">
                <h2>Project Objectives</h2>
                <p>The goal of this project is to evaluate the performance of three latest Linux-based Operating System distributions – <strong>Fedora, Ubuntu, and Kali Linux</strong>. These operating systems need to be configured as software routers before running evaluations. Tools such as <strong>D-ITG</strong> and <strong>iPerf</strong> will be used to generate evaluation traffic.</p>
                <h3>Objectives to be achieved include:</h3>
                <ul>
                    <li>Setup a network with four computers: two clients and two servers (servers configured as routers).</li>
                    <li>Use TCP and UDP as transmission protocols:
                        <ul>
                            <li>Evaluate on IPv4</li>
                            <li>Evaluate on IPv6</li>
                        </ul>
                    </li>
                    <li>Performance evaluation:
                        <ul>
                            <li>Each evaluation should run a minimum of ten times.</li>
                            <li>Evaluate for throughput, delay, jitter, and packet loss.</li>
                            <li>Any evaluation that falls outside the 95% confidence interval needs to be re-run.</li>
                        </ul>
                    </li>
                    <li>Each evaluation will range from 128 to 1536 bytes to assess performance under different conditions.</li>
                    <li>Set up physical machines with Fedora, Ubuntu, and Kali Linux distributions configured as software routers.</li>
                    <li>Conduct performance evaluations for TCP and UDP transmissions on both IPv4 and IPv6 protocols.</li>
                    <li>Follow the Software Testing Life Cycle (STLC) methodology, including requirement analysis, planning, case development, environment setup, execution, and closure.</li>
                </ul>
            </section>

            {/* Team Members Section */}
            <section>
                <h2>Team Members</h2>
                <ul>
                    <li>Thomas Robinson</li>
                    <li>Win Phyo</li>
                    <li>Nathan Quai Hoi</li>
                    <li>Zafar Azad</li>
                    <li>Larissa Goh</li>
                    <li>Charmi Patel</li>
                    <li>Kylie Afable</li>
                </ul>
            </section>
        </>
    )

}

export default Home